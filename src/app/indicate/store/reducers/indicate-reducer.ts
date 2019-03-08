import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { MoviesList } from '@models/movies-list';
import * as fromActions from 'app/indicate/store/actions';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
    indicate: MoviesList;
}

export const adapter: EntityAdapter<MoviesList> = createEntityAdapter<MoviesList>({});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    indicate: null,
});

export function reducer(state = initialState, action: fromActions.IndicateStore): State {
    switch (action.type) {
        case fromActions.INDICATE_SAVE: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.INDICATE_SAVE_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                indicate: state.indicate
            };
        }

        case fromActions.INDICATE_SAVE_FAIL: {
            return {
                ...state,
                loading: false,
                indicate: null
            };
        }

        case fromActions.INDICATE_CLEAR: {
            return {
                ...state,
                loading: false,
                loaded: false,
                indicate: null,
            };
        }
        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getIndicateSave = (state: State) => state.indicate;
