import { Action } from '@ngrx/store';
import { Profile } from '@models/profile';

export const LOAD_PROFILE            = '[Profile] Load Profile';
export const LOAD_PROFILE_SUCCESS    = '[Profile] Load Profile Success';
export const LOAD_PROFILE_FAIL       = '[Profile] Load Profile Fail';

export const CLEAR_PROFILE           = '[Profile] Clear Profile';

export class LoadProfile implements Action {
    readonly type = LOAD_PROFILE;

    constructor() { }
}

export class LoadProfileSuccess implements Action {
    readonly type = LOAD_PROFILE_SUCCESS;

    constructor(public response: Profile) { }
}

export class LoadProfileFail implements Action {
    readonly type = LOAD_PROFILE_FAIL;

    constructor(public payload: any) { }
}

export class ClearProfile implements Action {
    readonly type = CLEAR_PROFILE;

    constructor() { }
}


export type ProfileStore =
    | LoadProfile
    | LoadProfileSuccess
    | LoadProfileFail

    | ClearProfile;

