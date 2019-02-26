import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '@services/login.service';
import { TokenService } from '@services/token.service';

import { Store } from '@ngrx/store';

import * as fromProfile from 'app/profile/store';
import * as fromLoginActions from 'app/login/store/actions';
import * as fromLoginReducer from 'app/login/store/reducers';
import * as fromActions from 'app/login/store/actions';



@Injectable()
export class LoginEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGIN),
    switchMap((params: fromActions.Login) =>
      this.service.sendLogin(params.dataLogin).pipe(
        map((response: any) => new fromActions.LoginSuccess(response)),
        catchError(error => of(new fromActions.LoginFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGIN_FAIL),
    tap((action: fromActions.LoginFail) => {
      this.toastr.error('<i class="material-icons">error</i> Dados de acesso inválidos.', '', {enableHtml: true});
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGIN_SUCCESS),
    tap((action: fromActions.LoginSuccess) => {
      this.tokenService.setToken(action.response);
      this.store.dispatch(new fromProfile.LoadProfile());
    })
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGOUT),
    switchMap((params: fromActions.Login) =>
      this.service.sendLogout().pipe(
        map((response: any) => new fromActions.LogoutSuccess(response)),
        catchError(error => of(new fromActions.LogoutFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  logoutFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGOUT_FAIL),
    tap((action: fromActions.LogoutFail) => {
      this.toastr.error('<i class="material-icons">error</i> Erro ao sair. Tente novamente mais tarde.', '', {enableHtml: true});
    })
  );

  @Effect({ dispatch: false })
  logoutSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOGOUT_SUCCESS),
    tap((action: fromActions.LogoutSuccess) => {
      this.tokenService.removeStorage();
      this.store.dispatch(new fromProfile.ClearProfile());
      this.toastr.success('<i class="material-icons">done</i> Logout realizado com sucesso.', '', {enableHtml: true});
    })
  );

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
    tap((action: fromActions.VerifyTokenFail) => {
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
    private store: Store<fromProfile.ProfileState>,
    private loginStore: Store<fromLoginReducer.LoginState>,
    private service: LoginService,
    private tokenService: TokenService,
    private toastr: ToastrService) { }
}
