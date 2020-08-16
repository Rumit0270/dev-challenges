import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { useWeatherDetail } from '../hooks/useWeatherDetail';
import { ILocation } from '../api/weatherApiService';
import { useSetRecoilState } from 'recoil';
import { getCurrentLocation } from '../utils/location';
import { getLocationByLatLng } from '../api/weatherApiService';
import { weatherDetailState } from '../store/atom';
import { currentWeatherDetailState } from '../store/selector';
import TodaysWeather from '../components/TodaysWeather';
import LocationSearch from '../components/LocationSearch';

const CurrentWeather: React.FC = (): JSX.Element => {
  const weatherDetail = useRecoilValue(currentWeatherDetailState);
  const setWeatherDetail = useSetRecoilState(weatherDetailState);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [location, setLocation] = useState<ILocation | null>(null);

  const setCurrentLocation = useCallback(async () => {
    try {
      setWeatherDetail((detail) => ({
        ...detail,
        loading: true,
      }));

      let latlng = await getCurrentLocation();
      let locationsRes = await getLocationByLatLng(latlng.lat, latlng.lng);
      let locations = locationsRes.data;
      let currentLocation = locations.length > 0 ? locations[0] : null;

      setLocation(currentLocation);

      setWeatherDetail((detail) => ({
        ...detail,
        loading: false,
      }));
    } catch (err) {
      setWeatherDetail((detail) => ({
        ...detail,
        loading: false,
      }));
    }
  }, [setWeatherDetail]);

  useWeatherDetail(location);

  useEffect(() => {
    setCurrentLocation();
  }, [setCurrentLocation]);

  const { loading, currentWeatherDetail, error } = weatherDetail;

  const handleLocationClick = (location: ILocation) => {
    setLocation(location);
    setShowSearch(false);
  };

  const renderLoading = () => {
    if (loading) {
      return <span className="text-3xl text-dark-gray2">Loading...</span>;
    }
  };

  const renderError = () => {
    if (loading) {
      return null;
    }

    if (error || !currentWeatherDetail) {
      return (
        <div className="flex flex-col items-center">
          <span className="material-icons text-white text-6xl">error</span>
          <p className="text-xl text-dark-gray2 text-justify p-6">
            Something went wrong. Please make sure you have enabled location
            services.
          </p>
        </div>
      );
    }
  };

  const renderSearch = () => {
    let searchWidthClass = showSearch ? 'w-full lg:w-1/3' : 'w-0';
    return (
      <div
        className={`h-screen ${searchWidthClass} fixed left-0 top-0 py-4 lg:py-10 z-10 overflow-hidden bg-mirage location-search__container`}
      >
        <LocationSearch
          onClose={() => setShowSearch(false)}
          onLocationClick={handleLocationClick}
        />
      </div>
    );
  };

  const renderWeather = () => {
    if (!currentWeatherDetail || loading) {
      return null;
    }

    return (
      <TodaysWeather
        currentWeatherDetail={currentWeatherDetail}
        onLocationClick={() => setCurrentLocation()}
        onSearchClick={() => {
          setShowSearch(true);
        }}
      />
    );
  };

  return (
    <section
      className={`h-screen w-full lg:w-1/3 static lg:fixed lg:left-0 lg:top-0 py-4 lg:py-10 pb-6 lg:pb-8 bg-mirage flex flex-col ${
        currentWeatherDetail && !loading ? 'justify-between' : 'justify-center'
      } items-center font-raleway`}
    >
      {renderLoading()}
      {renderError()}
      {renderWeather()}
      {renderSearch()}
    </section>
  );
};

export default CurrentWeather;
