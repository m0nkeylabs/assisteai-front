import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/profile/store/reducers';
import * as fromProfile from 'app/profile/store/reducers/profile-reducer';


export const getProfileState = createSelector(
    fromFeature.getState,
    (state: fromFeature.ProfileState) => state.profile
);

export const {
    selectIds: getLoginIds,
    selectEntities: getLoginEntities,
    selectAll: getAllLogin,
} = fromProfile.adapter.getSelectors(getProfileState);

export const getProfile = createSelector(
  getProfileState,
  fromProfile.getProfile
);

export const getLoading = createSelector(
  getProfileState,
  fromProfile.getLoading
);

export const getLoaded = createSelector(
  getProfileState,
  fromProfile.getLoading
);
