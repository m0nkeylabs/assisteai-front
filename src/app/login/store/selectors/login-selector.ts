import { createSelector } from '@ngrx/store';

import * as fromFeature from 'app/login/store/reducers';
import * as fromLogin from 'app/login/store/reducers/login-reducer';


export const getLoginState = createSelector(
    fromFeature.getState,
    (state: fromFeature.LoginState) => state.loginPage
);

export const {
    selectIds: getLoginIds,
    selectEntities: getLoginEntities,
    selectAll: getAllLogin,
} = fromLogin.adapter.getSelectors(getLoginState);

export const getLogin = createSelector(
  getLoginState,
  fromLogin.getLoginData
);

export const getLoginLoading = createSelector(
  getLoginState,
  fromLogin.getLoading
);

export const getLoginLoaded = createSelector(
  getLoginState,
  fromLogin.getLoaded
);

export const getTokenLoading = createSelector(
  getLoginState,
  fromLogin.getTokenLoading
);

export const getTokenLoaded = createSelector(
  getLoginState,
  fromLogin.getTokenLoaded
);
