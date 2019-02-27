import { Action } from '@ngrx/store';

export const VERIFY_TOKEN           = '[Token] Verify Token';
export const VERIFY_TOKEN_SUCCESS   = '[Token] Verify Token Success';
export const VERIFY_TOKEN_FAIL      = '[Token] Verify Token Fail';

export class VerifyToken implements Action {
    readonly type = VERIFY_TOKEN;

    constructor() { }
}

export class VerifyTokenSuccess implements Action {
    readonly type = VERIFY_TOKEN_SUCCESS;

    constructor(public response: any) { }
}

export class VerifyTokenFail implements Action {
    readonly type = VERIFY_TOKEN_FAIL;

    constructor(public payload: any) { }
}

export type Token =
    | VerifyToken
    | VerifyTokenSuccess
    | VerifyTokenFail;

