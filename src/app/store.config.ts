import { Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { storeFreeze } from 'ngrx-store-freeze';


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const rootReducer: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
