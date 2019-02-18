import { Action } from '@ngrx/store';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';

export const LOAD_HOME_LIST           = '[Load Home List] Load Home list';
export const LOAD_HOME_LIST_SUCCESS   = '[Load Home List] Load Home list Success';
export const LOAD_HOME_LIST_FAIL      = '[Load Home List] Load Home list Fail';

export class LoadHomeList implements Action {
    readonly type = LOAD_HOME_LIST;

    constructor(public filter: FilterHome) { }
}

export class LoadHomeListSuccess implements Action {
    readonly type = LOAD_HOME_LIST_SUCCESS;

    constructor(public response: Paginable<MoviesList>) { }
}

export class LoadHomeListFail implements Action {
    readonly type = LOAD_HOME_LIST_FAIL;

    constructor(public payload: any) { }
}

export type HomeList =
    | LoadHomeList
    | LoadHomeListSuccess
    | LoadHomeListFail;

