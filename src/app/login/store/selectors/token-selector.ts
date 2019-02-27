import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/login/store/reducers';
import * as fromToken from 'app/login/store/reducers/token-reducer';


export const getTokenState = createSelector(
    fromFeature.getState,
    (state: fromFeature.AuthState) => state.token
);

export const {
    selectIds: getTokenIds,
    selectEntities: getTokenEntities,
    selectAll: getAllTokens,
} = fromToken.adapter.getSelectors(getTokenState);

export const getTokenLoading = createSelector(
  getTokenState,
  fromToken.getLoading
);

export const getTokenLoaded = createSelector(
  getTokenState,
  fromToken.getLoaded
);
