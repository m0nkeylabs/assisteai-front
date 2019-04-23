import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as fromActions from 'app/profile/store/actions';
import { Profile } from '@models/profile';

export interface State extends EntityState<any> {
    loading: boolean;
    loaded: boolean;
    profile: Profile;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (login: any) => login.acess_token
});

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
    profile: null
});

export function reducer(state = initialState, action: fromActions.ProfileStore): State {
    switch (action.type) {
        case fromActions.LOAD_PROFILE:
        case fromActions.UPDATE_PROFILE: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.LOAD_PROFILE_SUCCESS:
        case fromActions.UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                profile: action.response
            };
        }

        case fromActions.LOAD_PROFILE_FAIL:
        case fromActions.CLEAR_PROFILE: {
            return {
                ...state,
                loading: false,
                profile: null,
            };
        }

        case fromActions.UPDATE_PROFILE_FAIL: {
          return {
            ...state,
            loading: false
          };
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getProfile = (state: State) => state.profile;
