import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'app/store.config';
import * as fromLogin from 'app/login/store/reducers/login-reducer';


export interface State extends fromRoot.State {
  loginPage: LoginState;
}

export interface LoginState {
  loginPage: fromLogin.State;
}

export const reducers = {
  loginPage: fromLogin.reducer
};

export const getState = createFeatureSelector<LoginState>('loginPage');


