import { Action } from '@ngrx/store';
import { Profile } from '@models/profile';

export const LOAD_PROFILE            = '[Profile] Load Profile';
export const LOAD_PROFILE_SUCCESS    = '[Profile] Load Profile Success';
export const LOAD_PROFILE_FAIL       = '[Profile] Load Profile Fail';

export const UPDATE_PROFILE            = '[Profile] Update Profile';
export const UPDATE_PROFILE_SUCCESS    = '[Profile] Update Profile Success';
export const UPDATE_PROFILE_FAIL       = '[Profile] Update Profile Fail';

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

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public profile: Profile) { }
}

export class UpdateProfileSuccess implements Action {
  readonly type = UPDATE_PROFILE_SUCCESS;

  constructor(public response: Profile) { }
}

export class UpdateProfileFail implements Action {
  readonly type = UPDATE_PROFILE_FAIL;

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

    | UpdateProfile
    | UpdateProfileSuccess
    | UpdateProfileFail

    | ClearProfile;

