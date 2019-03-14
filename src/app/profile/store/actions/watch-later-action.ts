import { Action } from '@ngrx/store';

export const LOAD_ALL_WATCH_LATER            = '[Watch Later] Load All Watch Later';
export const LOAD_ALL_WATCH_LATER_SUCCESS    = '[Watch Later] Load All Watch Later Success';
export const LOAD_ALL_WATCH_LATER_FAIL       = '[Watch Later] Load All Watch Later Fail';

export const UPDATE_WATCH_LATER            = '[Watch Later] Update Watch Later';
export const UPDATE_WATCH_LATER_SUCCESS    = '[Watch Later] Update Watch Later Success';
export const UPDATE_WATCH_LATER_FAIL       = '[Watch Later] Update Watch Later Fail';

export class LoadAllWatchLater implements Action {
  readonly type = LOAD_ALL_WATCH_LATER;

  constructor() { }
}

export class LoadAllWatchLaterSuccess implements Action {
  readonly type = LOAD_ALL_WATCH_LATER_SUCCESS;

  constructor(public response: any) { }
}

export class LoadAllWatchLaterFail implements Action {
  readonly type = LOAD_ALL_WATCH_LATER_FAIL;

  constructor(public payload: any) { }
}

export class UpdateWatchLater implements Action {
    readonly type = UPDATE_WATCH_LATER;

    constructor(public movieId: number, public isActive: boolean) { }
}

export class UpdateWatchLaterSuccess implements Action {
    readonly type = UPDATE_WATCH_LATER_SUCCESS;

    constructor(public response: any) { }
}

export class UpdateWatchLaterFail implements Action {
    readonly type = UPDATE_WATCH_LATER_FAIL;

    constructor(public payload: any) { }
}


export type WatchLaterStore =
  | LoadAllWatchLater
  | LoadAllWatchLaterSuccess
  | LoadAllWatchLaterFail

  | UpdateWatchLater
  | UpdateWatchLaterSuccess
  | UpdateWatchLaterFail;

