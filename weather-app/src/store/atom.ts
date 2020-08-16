import { atom } from 'recoil';
import { IWeatherDetail } from '../api/weatherApiService';

export enum TemperateUnit {
  celsius = '℃',
  fahrenheit = '℉',
}

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

export const temperatureUnitState = atom<TemperateUnit>({
  key: 'TEMPERATURE_UNIT_STATE',
  default: TemperateUnit.celsius,
});
