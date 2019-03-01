import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/indicate/store/reducers';
import * as fromIndicate from 'app/indicate/store/reducers/indicate-reducer';


export const getIndicateState = createSelector(
    fromFeature.getState,
    (state: fromFeature.IndicateState) => state.indicate
);

export const getIndicate = createSelector(
  getIndicateState,
  fromIndicate.getIndicateSave
);

export const getLoading = createSelector(
  getIndicateState,
  fromIndicate.getLoading
);

export const getLoaded = createSelector(
  getIndicateState,
  fromIndicate.getLoaded
);
