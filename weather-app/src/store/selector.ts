import { selector } from 'recoil';

import { weatherDetailState } from './atom';

export interface ICurrentWeatherDetail {
  weatherState: string;
  currentTemp: number;
  city: string;
  date: string;
}

interface ICurrentWeatherDetailState {
  loading: boolean;
  currentWeatherDetail: ICurrentWeatherDetail | null;
  error: Error | null;
}

export const currentWeatherDetailState = selector<ICurrentWeatherDetailState>({
  key: 'CURRENT_WEATHER_DETAIL_STATE',
  get: ({ get }) => {
    const weatherDetail = get(weatherDetailState);

    if (
      !weatherDetail.detail ||
      (weatherDetail.detail &&
        weatherDetail.detail.consolidated_weather.length <= 0)
    ) {
      return {
        loading: weatherDetail.loading,
        currentWeatherDetail: null,
        error: weatherDetail.error,
      };
    }

    let currentDetail = weatherDetail.detail.consolidated_weather[0];

    let currentWeatherDetail: ICurrentWeatherDetail = {
      weatherState: currentDetail.weather_state_name,
      currentTemp: currentDetail.the_temp,
      city: weatherDetail.detail.title,
      date: currentDetail.applicable_date,
    };

    return {
      loading: weatherDetail.loading,
      currentWeatherDetail,
      error: weatherDetail.error,
    };
  },
});
