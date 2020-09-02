import {
  IImageState,
  ImageAction,
  fetchImages,
  removeImage,
  addImage,
} from './actions';
import { ImageActionTypes } from './actions/types';
import createDataContext from '../createDataContext';

const imageReducer = (state: IImageState, action: ImageAction): IImageState => {
  switch (action.type) {
    case ImageActionTypes.FETCH_IMAGE_REQUEST:
      return { ...state, loading: true };
    case ImageActionTypes.FETCH_IMAGE_COMPLETE:
      return {
        ...state,
        allImages: action.payload,
      };
    case ImageActionTypes.DELETE_IMAGE_REQUEST:
      return { ...state, loading: true };
    case ImageActionTypes.DELETE_IMAGE_COMPLETE:
      return {
        ...state,
        allImages: state.allImages.filter(
          (image) => image.id !== action.payload
        ),
      };
    case ImageActionTypes.ADD_IMAGE_REQUEST:
      return { ...state, loading: true };
    case ImageActionTypes.ADD_IMAGE_COMPLETE:
      if (action.payload) {
        return { ...state, allImages: [action.payload, ...state.allImages] };
      }
      return state;
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext<IImageState>(
  imageReducer,
  { fetchImages, removeImage, addImage },
  { loading: false, allImages: [] }
);
