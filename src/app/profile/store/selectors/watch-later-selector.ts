import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/profile/store/reducers';
import * as fromWatchLater from 'app/profile/store/reducers/watch-later-reducer';


export const getWatchLaterState = createSelector(
    fromFeature.getState,
    (state: fromFeature.ProfileState) => state.watchLater
);

export const getWatchLaterLoading = createSelector(
  getWatchLaterState,
  fromWatchLater.getLoading
);

export const getWatchLaterLoaded = createSelector(
  getWatchLaterState,
  fromWatchLater.getLoading
);

export const getWatchLaterId = createSelector(
  getWatchLaterState,
  fromWatchLater.getMovieId
);
