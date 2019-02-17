import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/home/store/reducers';
import * as fromHomeList from 'app/home/store/reducers/home-reducer';


export const getHomeListState = createSelector(
    fromFeature.getState,
    (state: fromFeature.HomeListState) => state.homeList
);

export const {
    selectIds: getHomeListIds,
    selectEntities: getHomeListEntities,
    selectAll: getAllHomeList,
} = fromHomeList.adapter.getSelectors(getHomeListState);

export const getHomeListResponse = createSelector(
  getHomeListState,
  fromHomeList.getHomeList
);

export const getHomeListLoading = createSelector(
  getHomeListState,
  fromHomeList.getLoading
);

export const getHomeListLoaded = createSelector(
  getHomeListState,
  fromHomeList.getLoading
);

export const getHomeListPagination = createSelector(
  getHomeListState,
  fromHomeList.getPagination
);
