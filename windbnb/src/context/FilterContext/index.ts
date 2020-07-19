import {
  IFilterOptions,
  FilterAction,
  applyFilter,
  resetFilter,
} from './actions';
import { FilterActionTypes } from './actions/types';
import createDataContext from '../createDataContext';

const filterReducer = (state: IFilterOptions, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.APPLY_FILTER:
      return { ...state, ...action.payload };
    case FilterActionTypes.RESET_FILTER:
      return {
        location: null,
        guests: { adult: null, children: null, description: null },
      };
  }
};

export const { Provider, Context } = createDataContext<IFilterOptions>(
  filterReducer,
  { applyFilter, resetFilter },
  { location: '', guests: { adult: 0, children: 0, description: '' } }
);
