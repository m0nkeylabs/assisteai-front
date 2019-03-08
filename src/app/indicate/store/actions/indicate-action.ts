import { Action } from '@ngrx/store';
import { Indicate } from '@models/indicate';
import { MoviesList } from '@models/movies-list';

export const INDICATE_SAVE           = '[Indicate] Indicate Save';
export const INDICATE_SAVE_SUCCESS   = '[Indicate] Indicate Save Success';
export const INDICATE_SAVE_FAIL      = '[Indicate] Indicate Save Fail';

export const INDICATE_CLEAR          = '[Indicate] Indicate Clear';

export class IndicateSave implements Action {
    readonly type = INDICATE_SAVE;

    constructor(public form: Indicate) { }
}

export class IndicateSaveSuccess implements Action {
    readonly type = INDICATE_SAVE_SUCCESS;

    constructor(public response: MoviesList) { }
}

export class IndicateSaveFail implements Action {
    readonly type = INDICATE_SAVE_FAIL;

    constructor(public payload: any) { }
}

export class IndicateClear implements Action {
    readonly type = INDICATE_CLEAR;

    constructor() { }
}

export type IndicateStore =
    | IndicateSave
    | IndicateSaveSuccess
    | IndicateSaveFail

    | IndicateClear;

