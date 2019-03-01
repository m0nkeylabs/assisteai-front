import { createFeatureSelector } from '@ngrx/store';
import * as fromIndicate from 'app/indicate/store/reducers/indicate-reducer';

export interface IndicateState {
  indicate: fromIndicate.State;
}

export const reducers = {
  indicate: fromIndicate.reducer
};

export const getState = createFeatureSelector<IndicateState>('indicate');


