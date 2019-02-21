import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as fromActions from 'app/home/store/actions';
import { Pagination } from '@models/pagination';
import { MoviesList } from '@models/movies-list';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
    homeList: Array<MoviesList>;
    pagination: Pagination;
}

export const adapter: EntityAdapter<MoviesList> = createEntityAdapter<MoviesList>({
  selectId: (moviesList: MoviesList) => moviesList.id
});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    homeList: [],
    pagination: null,
});

export function reducer(state = initialState, action: fromActions.HomeList): State {
    switch (action.type) {
        case fromActions.LOAD_HOME_LIST:
        case fromActions.UPDATE_HOME_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.LOAD_HOME_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                homeList: [...state.homeList, ...action.response.data],
                pagination: new Pagination(action.response)
            };
        }

        case fromActions.UPDATE_HOME_LIST_SUCCESS: {
          return {
              ...state,
              loading: false,
              loaded: true,
              homeList: action.response.data,
              pagination: new Pagination(action.response)
          };
        }

        case fromActions.LOAD_HOME_LIST_FAIL:
        case fromActions.UPDATE_HOME_LIST_FAIL: {
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
