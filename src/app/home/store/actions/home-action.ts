import { Action } from '@ngrx/store';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';

export const LOAD_HOME_LIST           = '[Load] Load Home list';
export const LOAD_HOME_LIST_SUCCESS   = '[Load] Load Home list Success';
export const LOAD_HOME_LIST_FAIL      = '[Load] Load Home list Fail';

export const UPDATE_HOME_LIST           = '[Update] Update Home list';
export const UPDATE_HOME_LIST_SUCCESS   = '[Update] Update Home list Success';
export const UPDATE_HOME_LIST_FAIL      = '[Update] Update Home list Fail';

export const UPDATE_WATCH_LATER_MOVIE           = '[Update] Update Watch Later';
export const UPDATE_ALL_WATCH_LATER_MOVIE       = '[Update] Update All Watch Later';


export class LoadHomeList implements Action {
    readonly type = LOAD_HOME_LIST;

    constructor(public filter: FilterHome) { }
}

export class LoadHomeListSuccess implements Action {
    readonly type = LOAD_HOME_LIST_SUCCESS;

    constructor(public response: Paginable<MoviesList>) { }
}

export class UpdateHomeListFail implements Action {
    readonly type = LOAD_HOME_LIST_FAIL;

    constructor(public payload: any) { }
}

export class UpdateHomeList implements Action {
  readonly type = UPDATE_HOME_LIST;

  constructor(public filter: FilterHome) { }
}

export class UpdateHomeListSuccess implements Action {
  readonly type = UPDATE_HOME_LIST_SUCCESS;

  constructor(public response: Paginable<MoviesList>) { }
}

export class LoadHomeListFail implements Action {
  readonly type = UPDATE_HOME_LIST_FAIL;

  constructor(public payload: any) { }
}

export class UpdateWatchLaterMovie implements Action {
  readonly type = UPDATE_WATCH_LATER_MOVIE;

  constructor(public movieId: number) { }
}

export class UpdateAllWatchLaterMovie implements Action {
  readonly type = UPDATE_ALL_WATCH_LATER_MOVIE;

  constructor(public moviesId: Array<number>) { }
}

export type HomeList =
    | LoadHomeList
    | LoadHomeListSuccess
    | LoadHomeListFail

    | UpdateHomeList
    | UpdateHomeListSuccess
    | UpdateHomeListFail

    | UpdateWatchLaterMovie
    | UpdateAllWatchLaterMovie;

