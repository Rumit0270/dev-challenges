import React from 'react';

import { ImageActionTypes } from './types';
import { IAction } from '../../createDataContext';
import {
  IImage,
  getImages,
  deleteImage,
  addImage as postImage,
} from '../../../api/imageService';

export interface IImageState {
  loading: boolean;
  allImages: IImage[];
}

interface IFetchImageRequestAction extends IAction {
  type: ImageActionTypes.FETCH_IMAGE_REQUEST;
}

interface IFetchImageCompleteAction extends IAction {
  type: ImageActionTypes.FETCH_IMAGE_COMPLETE;
  payload: IImage[];
}

interface IDeleteImageRequestAction extends IAction {
  type: ImageActionTypes.DELETE_IMAGE_REQUEST;
}

interface IDeleteImageCompleteAction extends IAction {
  type: ImageActionTypes.DELETE_IMAGE_COMPLETE;
  payload: string;
}

interface IAddImageRequestAction extends IAction {
  type: ImageActionTypes.ADD_IMAGE_REQUEST;
}

interface IAddImageCompleteAction extends IAction {
  type: ImageActionTypes.ADD_IMAGE_COMPLETE;
  payload: IImage | null;
}

export type ImageAction =
  | IAddImageCompleteAction
  | IAddImageRequestAction
  | IDeleteImageCompleteAction
  | IDeleteImageRequestAction
  | IFetchImageCompleteAction
  | IFetchImageRequestAction;

//// action creators
export const fetchImages = (
  dispatch: React.Dispatch<IFetchImageRequestAction | IFetchImageCompleteAction>
) => {
  return async () => {
    try {
      dispatch({ type: ImageActionTypes.FETCH_IMAGE_REQUEST });
      let res = await getImages();
      let images = res.data;
      dispatch({
        type: ImageActionTypes.FETCH_IMAGE_COMPLETE,
        payload: images,
      });
    } catch (err) {
      dispatch({ type: ImageActionTypes.FETCH_IMAGE_COMPLETE, payload: [] });
    }
  };
};

export const addImage = (
  dispatch: React.Dispatch<IAddImageRequestAction | IAddImageCompleteAction>
) => {
  return async (image: IImage) => {
    try {
      dispatch({ type: ImageActionTypes.ADD_IMAGE_REQUEST });
      let res = await postImage(image);
      let addedImage = res.data;
      dispatch({
        type: ImageActionTypes.ADD_IMAGE_COMPLETE,
        payload: addedImage,
      });
    } catch (err) {
      dispatch({ type: ImageActionTypes.ADD_IMAGE_COMPLETE, payload: null });
    }
  };
};

export const removeImage = (
  dispatch: React.Dispatch<
    IDeleteImageCompleteAction | IDeleteImageRequestAction
  >
) => {
  return async (id: string) => {
    try {
      dispatch({ type: ImageActionTypes.DELETE_IMAGE_REQUEST });
      let res = await deleteImage(id);
      dispatch({
        type: ImageActionTypes.DELETE_IMAGE_COMPLETE,
        payload: res.data.id,
      });
    } catch (err) {
      dispatch({ type: ImageActionTypes.DELETE_IMAGE_COMPLETE, payload: '' });
    }
  };
};
