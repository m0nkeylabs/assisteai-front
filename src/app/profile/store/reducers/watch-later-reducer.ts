import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as fromActions from 'app/profile/store/actions';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
    movieId: number;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    movieId: null
});

export function reducer(state = initialState, action: fromActions.WatchLaterStore): State {
    switch (action.type) {
        case fromActions.UPDATE_WATCH_LATER: {
            return {
              ...state,
              loading: true,
              movieId: action.movieId
            };
        }

        case fromActions.UPDATE_WATCH_LATER_SUCCESS: {
            return {
              ...state,
              loading: false,
              loaded: true
            };
        }

        case fromActions.UPDATE_WATCH_LATER_FAIL: {
            return {
              ...state,
              loading: false,
              movieId: null
            };
        }
        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getMovieId = (state: State) => state.movieId;
