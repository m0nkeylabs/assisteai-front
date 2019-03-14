import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '@services/profile.service';
import { WatchLaterService } from '@services/watch-later.service';

import * as fromStore from 'app/home/store';
import * as fromActions from 'app/profile/store/actions';
import * as fromReducer from 'app/profile/store/reducers/watch-later-reducer';



@Injectable()
export class WatchLaterEffects {

  @Effect()
  loadAllWatchLater$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_ALL_WATCH_LATER),
    switchMap((params: fromActions.LoadAllWatchLater) =>
      this.serviceWatchLater.getAllWatchLater().pipe(
        map((response: any) => new fromActions.LoadAllWatchLaterSuccess(response)),
        catchError(error => of(new fromActions.LoadAllWatchLaterFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loadAllWatchLaterFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_ALL_WATCH_LATER_FAIL),
    tap((action: fromActions.LoadAllWatchLaterFail) => {
      this.toastr.error('<i class="material-icons">error</i> Erro ao carregar sua lista de Assistir depois.', '', {enableHtml: true});
    })
  );

  @Effect({ dispatch: false })
  loadAllWatchLaterSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_ALL_WATCH_LATER_SUCCESS),
    tap((action: fromActions.LoadAllWatchLaterSuccess) => {
      this.store.dispatch(new fromStore.UpdateAllWatchLaterMovie(action.response.movie_ids));
    })
  );

  @Effect()
  updateWatchLater$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UPDATE_WATCH_LATER),
    switchMap((params: fromActions.UpdateWatchLater) =>
      this.service.updateWatchLater(params.movieId, params.isActive).pipe(
        map((response: any) => new fromActions.UpdateWatchLaterSuccess(response)),
        catchError(error => of(new fromActions.UpdateWatchLaterFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  updateWatchLaterFail$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UPDATE_WATCH_LATER_FAIL),
    tap((action: fromActions.UpdateWatchLaterFail) => {
      this.toastr.error('<i class="material-icons">error</i> Erro ao adicionar em sua lista de Assistir depois.', '', {enableHtml: true});
    })
  );

  @Effect({ dispatch: false })
  updateWatchLaterSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.UPDATE_WATCH_LATER_SUCCESS),
    tap((action: fromActions.UpdateWatchLaterSuccess) => {
      this.store.dispatch(new fromStore.UpdateWatchLaterMovie(action.response.movie.id));
    })
  );

  constructor(
    private store: Store<fromStore.HomeListState>,
    private actions$: Actions,
    private service: ProfileService,
    private serviceWatchLater: WatchLaterService,
    private toastr: ToastrService) { }
}
