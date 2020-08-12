import { atom } from 'recoil';
import { IWeatherDetail } from '../api/weatherApiService';

interface IWeatherDetailState {
  loading: boolean;
  detail: IWeatherDetail | null;
  error: Error | null;
}

export const weatherDetailState = atom<IWeatherDetailState>({
  key: 'WEATHER_DETAIL_STATE',
  default: {
    loading: true,
    detail: null,
    error: null,
  },
});
