import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as fromActions from 'app/profile/store/actions';
import { ProfileService } from '@services/profile.service';



@Injectable()
export class ProfileEffects {

  @Effect()
  loadProfile$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_PROFILE),
    switchMap((params: fromActions.LoadProfile) =>
      this.service.getProfile().pipe(
        map((response: any) => new fromActions.LoadProfileSuccess(response)),
        catchError(error => of(new fromActions.LoadProfileFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loadProfileFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_PROFILE_FAIL),
    tap((action: fromActions.LoadProfileFail) => {
      this.toastr.error('<i class="material-icons">error</i> Erro ao carregar seus dados.', '', {enableHtml: true});
    })
  );

  constructor(
    private actions$: Actions,
    private service: ProfileService,
    private toastr: ToastrService) { }
}
