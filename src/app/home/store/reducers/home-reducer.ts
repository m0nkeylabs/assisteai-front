import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as fromActions from 'app/home/store/actions';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
    homeList: any;
    pagination: any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    homeList: [],
    pagination: null,
});

export function reducer(state = initialState, action: fromActions.HomeList): State {
    switch (action.type) {
        case fromActions.LOAD_HOME_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.LOAD_HOME_LIST_SUCCESS: {
            return {
                ...adapter.addOne(action.response, state),
                loading: false,
                loaded: true,
                homeList: action.response.movies.data,
                pagination: action.response.movies
            };
        }

        case fromActions.LOAD_HOME_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                homeList: [],
                pagination: null
            };
        }
        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getHomeList = (state: State) => state.homeList;
export const getPagination = (state: State) => state.pagination;
