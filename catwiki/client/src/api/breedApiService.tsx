import apiService from './apiService';

export interface IPopularBreed {
  _id: string;
  breedId: string;
  name: string;
  description: string;
  imageUrl: string;
  searchCount: number;
}

export const fetchPopularBreeds = () => {
  return apiService.get<IPopularBreed[]>('/api/breeds/popular');
};

export const searchBreeds = (searchTerm: string) => {
  return apiService.get<any[]>(`/api/breeds/search?searchTerm=${searchTerm}`);
};
