import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as fromActions from 'app/login/store/actions';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
});

export function reducer(state = initialState, action: fromActions.Token): State {
    switch (action.type) {
      case fromActions.VERIFY_TOKEN: {
        return {
            ...state,
            loading: true,
            loaded: false
        };
      }

      case fromActions.VERIFY_TOKEN_FAIL:
      case fromActions.VERIFY_TOKEN_SUCCESS: {
        return {
            ...state,
            loading: false,
            loaded: true,
        };
      }

      default: {
          return state;
      }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
