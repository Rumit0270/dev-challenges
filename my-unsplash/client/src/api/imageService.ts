import apiService from './apiService';

export interface IImage {
  id?: string;
  label: string;
  imageUrl: string;
}

export const getImages = () => {
  return apiService.get<IImage[]>('/images/');
};

export const addImage = (image: IImage) => {
  return apiService.post<IImage>('/images/', image);
};

export const deleteImage = (id: string) => {
  return apiService.delete<{ id: string }>(`/images/${id}`);
};
