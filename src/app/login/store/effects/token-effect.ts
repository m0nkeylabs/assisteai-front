import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '@services/login.service';
import { TokenService } from '@services/token.service';

import { Store } from '@ngrx/store';

import * as fromLoginActions from 'app/login/store/actions';
import * as fromLoginReducer from 'app/login/store/reducers';
import * as fromActions from 'app/login/store/actions';


@Injectable()
export class TokenEffects {

  @Effect()
  verifyToken$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.VERIFY_TOKEN),
    switchMap((params: fromActions.VerifyToken) =>
      this.service.refreshToken().pipe(
        map((response: any) => new fromActions.VerifyTokenSuccess(response)),
        catchError(error => of(new fromActions.VerifyTokenFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  verifyTokenFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.VERIFY_TOKEN_FAIL),
    tap(() => {
      this.loginStore.dispatch(new fromLoginActions.Logout());
      this.toastr.error('<i class="material-icons">error</i> Sessão encerrada. Realize o login novamente.', '', {enableHtml: true});
    })
  );

  @Effect({ dispatch: false })
  verifyTokenSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.VERIFY_TOKEN_SUCCESS),
    tap((action: fromActions.VerifyTokenSuccess) => {
      this.tokenService.setToken(action.response);
    })
  );

  constructor(
    private actions$: Actions,
    private loginStore: Store<fromLoginReducer.AuthState>,
    private service: LoginService,
    private tokenService: TokenService,
    private toastr: ToastrService) { }
}
