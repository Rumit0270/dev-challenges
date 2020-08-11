import apiService from './apiService';

export interface ILocation {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface IConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface IWeatherDetail {
  consolidated_weather: IConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export const getLocationByLatLng = (lat: number, lng: number) => {
  return apiService.get<ILocation[]>(
    `/location/search/?lattlong=${lat},${lng}`
  );
};

export const getLocationByTag = (tag: string) => {
  return apiService.get<ILocation[]>(`/location/search/?query=${tag}`);
};

export const getWeatherDetailsForLocation = (location: ILocation) => {
  return apiService.get<IWeatherDetail>(`/location/${location.woeid}/`);
};
