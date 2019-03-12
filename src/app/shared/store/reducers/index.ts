import { createFeatureSelector } from '@ngrx/store';
import * as fromProfile from 'app/profile/store/reducers/profile-reducer';

export interface ProfileState {
  watchLater: fromProfile.State;
}

export const reducers = {
  watchLater: fromProfile.reducer
};

export const getState = createFeatureSelector<ProfileState>('watchLater');


