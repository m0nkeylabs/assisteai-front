import { Action } from '@ngrx/store';

export const LOAD_HOME_LIST           = '[Load Home List] Load Home list';
export const LOAD_HOME_LIST_SUCCESS   = '[Load Home List] Load Home list Success';
export const LOAD_HOME_LIST_FAIL      = '[Load Home List] Load Home list Fail';

export class LoadHomeList implements Action {
    readonly type = LOAD_HOME_LIST;

    constructor(public filter: any) { }
}

export class LoadHomeListSuccess implements Action {
    readonly type = LOAD_HOME_LIST_SUCCESS;

    constructor(public response: any) { }
}

export class LoadHomeListFail implements Action {
    readonly type = LOAD_HOME_LIST_FAIL;

    constructor(public payload: any) { }
}

export type HomeList =
    | LoadHomeList
    | LoadHomeListSuccess
    | LoadHomeListFail;

