import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { HomeService } from '@services/home.service';

import * as fromActions from 'app/home/store/actions';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';


@Injectable()
export class HomeEffects {

  @Effect()
  loadHomeList$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_HOME_LIST),
    switchMap((params: fromActions.LoadHomeList) =>
      this.service.getAllMoviesAndSeries(params.filter).pipe(
        map((response: Paginable<MoviesList>) => new fromActions.LoadHomeListSuccess(response)),
        catchError(error => of(new fromActions.LoadHomeListFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loadHomeListFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_HOME_LIST_FAIL),
    tap((action: fromActions.LoadHomeListFail) => {
      this.toastr.error('<i class="material-icons">error</i> Ocorreu um erro inesperado ao listar as indicações.', '', {enableHtml: true});
    })
  );

  @Effect()
  updateHomeList$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UPDATE_HOME_LIST),
    switchMap((params: fromActions.UpdateHomeList) =>
      this.service.getAllMoviesAndSeries(params.filter).pipe(
        map((response: Paginable<MoviesList>) => new fromActions.UpdateHomeListSuccess(response)),
        catchError(error => of(new fromActions.UpdateHomeListFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  updateHomeListFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UPDATE_HOME_LIST_FAIL),
    tap((action: fromActions.UpdateHomeListFail) => {
      this.toastr.error('<i class="material-icons">error</i> Ocorreu um erro inesperado ao listar as indicações.', '', {enableHtml: true});
    })
  );

  constructor(
    private actions$: Actions,
    private service: HomeService,
    private toastr: ToastrService) { }
}
