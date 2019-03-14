import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Pagination } from '@models/pagination';
import { MoviesList } from '@models/movies-list';
import * as fromActions from 'app/home/store/actions';
import * as _ from 'lodash';
import { Actions } from '@ngrx/effects';

export interface State extends EntityState<MoviesList> {
    loading: boolean;
    loaded: boolean;
    pagination: Pagination;
}

export const adapter: EntityAdapter<MoviesList> = createEntityAdapter<MoviesList>({
  selectId: (moviesList: MoviesList) => moviesList.id
});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    pagination: null,
});

export function reducer(state = initialState, action: fromActions.HomeList): State {
    switch (action.type) {
        case fromActions.LOAD_HOME_LIST: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }

        case fromActions.LOAD_HOME_LIST_SUCCESS: {
            return {
                ...adapter.addMany(action.response.data, state),
                loading: false,
                loaded: true,
                pagination: new Pagination(action.response)
            };
        }

        case fromActions.UPDATE_HOME_LIST: {
            return {
                ...adapter.addAll([], state),
                loading: true,
                loaded: false,
                pagination: null
            };
        }

        case fromActions.UPDATE_HOME_LIST_SUCCESS: {
          return {
              ...adapter.addAll(action.response.data, state),
              loading: false,
              loaded: true,
              pagination: new Pagination(action.response)
          };
        }

        case fromActions.LOAD_HOME_LIST_FAIL:
        case fromActions.UPDATE_HOME_LIST_FAIL: {
          return {
              ...adapter.addAll([], state),
              loading: false,
              loaded: false,
              pagination: null
          };
        }

        case fromActions.UPDATE_WATCH_LATER_MOVIE: {
          const newHomeList = _.cloneDeep(state.entities);
          newHomeList[action.movieId].watch_later = !state.entities[action.movieId].watch_later;
          return {
            ...adapter.updateOne({
              id: action.movieId,
              changes: newHomeList[action.movieId]
            }, state)
          };
        }

        case fromActions.UPDATE_ALL_WATCH_LATER_MOVIE: {
          const homeListIds = _.cloneDeep(state.ids);
          const newHomeList = _.cloneDeep(state.entities);
          return {
            ...adapter.updateMany(action.moviesId.map(movieId => {
              if (_.includes(homeListIds, movieId)) {
                newHomeList[movieId].watch_later = true;
                return {
                  id: movieId,
                  changes: newHomeList[movieId]
                 };
              }
            }), state)
          };
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getPagination = (state: State) => state.pagination;
