import { createFeatureSelector } from '@ngrx/store';
import * as fromLogin from 'app/login/store/reducers/login-reducer';
import * as fromToken from 'app/login/store/reducers/token-reducer';

export interface AuthState {
  loginPage: fromLogin.State;
  token: fromToken.State;
}

export const reducers = {
  loginPage: fromLogin.reducer,
  token: fromToken.reducer
};

export const getState = createFeatureSelector<AuthState>('AuthPage');


