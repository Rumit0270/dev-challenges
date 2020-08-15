import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import TodaysWeather from '../components/TodaysWeather';
import { currentWeatherDetailState } from '../store/selector';
import { useCurrentWeatherDetail } from '../hooks/useCurrentWeatherDetail';
import LocationSearch from '../components/LocationSearch';

const CurrentWeather: React.FC = (): JSX.Element => {
  const weatherDetail = useRecoilValue(currentWeatherDetailState);
  const [fetchData, setFetchData] = useState<boolean>(true);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useCurrentWeatherDetail(fetchData);

  const { loading, currentWeatherDetail, error } = weatherDetail;

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
        <span className="text-3xl text-dark-gray2">
          Something went wrong. Please make sure you have enabled location.
        </span>
      );
    }
  };

  const renderSearch = () => {};

  const renderWeather = () => {
    if (!currentWeatherDetail || loading) {
      return null;
    }

    return (
      <TodaysWeather
        currentWeatherDetail={currentWeatherDetail}
        onLocationClick={() => setFetchData((prev) => !prev)}
        onSearchClick={() => {
          setShowSearch(true);
        }}
      />
    );
  };

  return (
    <section
      className={`h-screen w-full lg:w-1/3 static lg:fixed lg:left-0 lg:top-0 py-4 lg:py-10 bg-mirage flex flex-col ${
        currentWeatherDetail && !loading ? 'justify-between' : 'justify-center'
      } items-center font-raleway mb-6`}
    >
      {renderLoading()}
      {renderError()}
      {renderWeather()}
      {renderSearch()}
    </section>
  );
};

export default CurrentWeather;
