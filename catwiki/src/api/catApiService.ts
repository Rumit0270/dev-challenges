import apiService from './apiService';

export const searchBreedByName = async (searchTerm: string) => {
  try {
    const res = await apiService.get(`/breeds/search?q=${searchTerm}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
