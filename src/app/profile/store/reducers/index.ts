import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'app/store.config';
import * as fromProfile from 'app/profile/store/reducers/profile-reducer';


export interface State extends fromRoot.State {
  profile: ProfileState;
}

export interface ProfileState {
  profile: fromProfile.State;
}

export const reducers = {
  profile: fromProfile.reducer
};

export const getState = createFeatureSelector<ProfileState>('profile');


