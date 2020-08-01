import apiService from './apiService';

export interface CountryDetail {
  name: string;
  capital: string;
  region: string;
  flag: string;
}

export const fetchCountryDetails = () => {
  return apiService.get<CountryDetail[]>(
    '/all?fields=name;capital;region;flag'
  );
};
