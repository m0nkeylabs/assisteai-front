import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'app/store.config';
import * as fromLogin from 'app/login/store/reducers/login-reducer';
import * as fromToken from 'app/login/store/reducers/token-reducer';


export interface State extends fromRoot.State {
  authPage: AuthState;
}

export interface AuthState {
  loginPage: fromLogin.State;
  token: fromToken.State;
}

export const reducers = {
  loginPage: fromLogin.reducer,
  token: fromToken.reducer
};

export const getState = createFeatureSelector<AuthState>('AuthPage');


