import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TokenService } from '@servicestoken.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from 'app/login/store';
import * as fromProfileStore from 'app/profile/store';
import { debounce } from 'lodash-decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingLogin$: Observable<boolean>;
  loadingToken$: Observable<boolean>;
  loadedToken$: Observable<boolean>;
  loadingProfile$: Observable<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<fromStore.AuthState>,
    private profileStore: Store<fromProfileStore.ProfileState>,
    private tokenService: TokenService) {
      setInterval(() => { this.changeDetectorRef.detectChanges(); }, 1000);

      this.loadingLogin$ = this.store.pipe(select(fromStore.getLoginLoading));
      this.loadingToken$ = this.store.pipe(select(fromStore.getTokenLoading));
      this.loadedToken$ = this.store.pipe(select(fromStore.getTokenLoaded));
      this.loadingProfile$ = this.profileStore.pipe(select(fromProfileStore.getLoading));
      this.validateToken();
    }

  ngOnInit() { }

  @debounce(800)
  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  validateToken() {
    const tokenStore = this.tokenService.getToken();
    const validation = this.tokenService.validationExpirationDate();
    if (tokenStore) {
      validation ? this.loadProfile() : this.refreshToken();
    }
  }

  loadProfile() {
    this.profileStore.dispatch(new fromProfileStore.LoadProfile());
  }

  refreshToken() {
    this.loadedToken$.subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.VerifyToken());
        this.validateToken();
      }
    });

  }
}
