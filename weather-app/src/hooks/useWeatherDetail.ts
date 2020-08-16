import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { weatherDetailState } from '../store/atom';
import {
  getWeatherDetailsForLocation,
  ILocation,
} from '../api/weatherApiService';

export const useWeatherDetail = (location: ILocation | null) => {
  const setWeatherDetail = useSetRecoilState(weatherDetailState);

  const getWeatherDetail = useCallback(async () => {
    if (!location) {
      return;
    }

    try {
      setWeatherDetail((detail) => ({
        ...detail,
        loading: true,
      }));

      let weatherDetailRes = await getWeatherDetailsForLocation(location);
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
  }, [setWeatherDetail, location]);

  useEffect(() => {
    getWeatherDetail();
  }, [getWeatherDetail]);
};
