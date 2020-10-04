import apiService from './apiService';

export interface IPopularBreed {
  _id: string;
  breedId: string;
  name: string;
  description: string;
  imageUrl: string;
  searchCount: number;
}

export interface IBreedDetail {
  id: string;
  imageUrl?: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

export const fetchPopularBreeds = () => {
  return apiService.get<IPopularBreed[]>('/api/breeds/popular');
};

export const searchBreeds = (searchTerm: string) => {
  return apiService.get<IBreedDetail[]>(`/api/breeds/search?searchTerm=${searchTerm}`);
};

export const postFavouriteBreed = (breedId: string, name: string, description: string) => {
  return apiService.post<any>('/api/breeds/popular', {
    breedId,
    name,
    description,
  });
};

export const fetchBreedImages = (breedId: string) => {
  return apiService.get<string[]>(`/api/breeds/images?breedId=${breedId}`);
};
