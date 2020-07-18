import React from 'react';

import { FilterActionTypes } from './types';
import { IAction } from '../../createDataContext';

export interface IFilterOptions {
  location: string | null;
  guests: {
    adult: number | null;
    children: number | null;
  };
}

export interface IApplyFilterAction extends IAction {
  type: FilterActionTypes.APPLY_FILTER;
  payload: IFilterOptions;
}

export interface IResetFilterAction extends IAction {
  type: FilterActionTypes.RESET_FILTER;
}

export type FilterAction = IApplyFilterAction | IResetFilterAction;

//// action creators
export const applyFilter = (dispatch: React.Dispatch<IApplyFilterAction>) => {
  return (filterOptions: IFilterOptions) => {
    dispatch({
      type: FilterActionTypes.APPLY_FILTER,
      payload: filterOptions,
    });
  };
};

export const resetFilter = (dispatch: React.Dispatch<IResetFilterAction>) => {
  return () => {
    dispatch({
      type: FilterActionTypes.RESET_FILTER,
    });
  };
};
