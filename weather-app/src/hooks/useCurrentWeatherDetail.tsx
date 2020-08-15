import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { weatherDetailState } from '../store/atom';
import { getCurrentLocation } from '../utils/location';
import {
  getLocationByLatLng,
  getWeatherDetailsForLocation,
} from '../api/weatherApiService';

export const useCurrentWeatherDetail = (fetchData: boolean) => {
  const setWeatherDetail = useSetRecoilState(weatherDetailState);

  const getCurrentWeatherDetail = useCallback(async () => {
    try {
      setWeatherDetail((detail) => ({
        ...detail,
        loading: true,
      }));

      let latlng = await getCurrentLocation();
      let locationsRes = await getLocationByLatLng(latlng.lat, latlng.lng);
      let locations = locationsRes.data;
      let currentLocation = locations.length > 0 ? locations[0] : null;
      if (!currentLocation) {
        setWeatherDetail({
          loading: false,
          detail: null,
          error: null,
        });
        return;
      }

      let weatherDetailRes = await getWeatherDetailsForLocation(
        currentLocation
      );
      let weatherDetail = weatherDetailRes.data;
      setWeatherDetail({
        loading: false,
        detail: weatherDetail,
        error: null,
      });
    } catch (err) {
      setWeatherDetail({
        loading: false,
        detail: null,
        error: err,
      });
    }
  }, [setWeatherDetail]);

  useEffect(() => {
    getCurrentWeatherDetail();
  }, [getCurrentWeatherDetail, fetchData]);
};
