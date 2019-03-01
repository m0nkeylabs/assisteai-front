import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'app/store.config';
import * as fromIndicate from 'app/indicate/store/reducers/indicate-reducer';


export interface State extends fromRoot.State {
  indicate: IndicateState;
}

export interface IndicateState {
  indicate: fromIndicate.State;
}

export const reducers = {
  indicate: fromIndicate.reducer
};

export const getState = createFeatureSelector<IndicateState>('indicate');


