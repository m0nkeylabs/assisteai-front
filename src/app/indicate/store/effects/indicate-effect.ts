import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { IndicateService } from '@services/indicate.service';
import { MoviesList } from '@models/movies-list';

import * as fromActions from 'app/indicate/store/actions';



@Injectable()
export class IndicateEffects {

  @Effect()
  indicateSave$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.INDICATE_SAVE),
    switchMap((params: fromActions.IndicateSave) =>
      this.service.sendIndicate(params.form).pipe(
        map((response: MoviesList) => new fromActions.IndicateSaveSuccess(response)),
        catchError(error => of(new fromActions.IndicateSaveFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  indicateSaveFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.INDICATE_SAVE_FAIL),
    tap((action: fromActions.IndicateSaveFail) => {
      this.toastr.error('<i class="material-icons">error</i> ' + action.payload.error.message, '', {enableHtml: true});
    })
  );

  constructor(
    private actions$: Actions,
    private service: IndicateService,
    private toastr: ToastrService) { }
}
