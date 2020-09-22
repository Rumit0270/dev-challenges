import apiService from './apiService';

interface ICatBreedsQueryParams {
  attach_breed?: number;
  page?: number;
  limit?: number;
}

export const searchBreedByName = async (searchTerm: string) => {
  try {
    const res = await apiService.get(`/breeds/search?q=${searchTerm}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchCatBreeds = async (params?: ICatBreedsQueryParams) => {
  try {
    let queryString = '';

    if (params && params.attach_breed) {
      queryString += `?attach_breed=${params.attach_breed}&`;
    }

    if (params && params.limit) {
      queryString += `?limit=${params.limit}&`;
    }

    if (params && params.page) {
      queryString += `?page=${params.page}&`;
    }

    const res = await apiService.get<any[]>(`/breeds/${queryString}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchBreedImages = async (breedId: string, limit: number = 1) => {
  try {
    const res = await apiService.get<any[]>(
      `/images/search?breed_id=${breedId}&limit=${limit}`
    );

    const images: string[] = res.data.map((item) => item.url);

    return images;
  } catch (err) {
    throw err;
  }
};
