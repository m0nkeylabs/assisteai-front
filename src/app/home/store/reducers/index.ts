import { createFeatureSelector } from '@ngrx/store';
import * as fromHomeList from 'app/home/store/reducers/home-reducer';


export interface HomeListState {
  homeList: fromHomeList.State;
}

export const reducers = {
  homeList: fromHomeList.reducer
};

export const getState = createFeatureSelector<HomeListState>('homeList');


