import { createFeatureSelector } from '@ngrx/store';
import * as fromProfile from 'app/profile/store/reducers/profile-reducer';
import * as fromWatchLater from 'app/profile/store/reducers/watch-later-reducer';

export interface ProfileState {
  profile: fromProfile.State;
  watchLater: fromWatchLater.State;
}

export const reducers = {
  profile: fromProfile.reducer,
  watchLater: fromWatchLater.reducer
};

export const getState = createFeatureSelector<ProfileState>('profile');


