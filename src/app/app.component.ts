import { Component, OnInit } from '@angular/core';
import { TokenService } from '@servicestoken.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from 'app/login/store';
import * as fromProfileStore from 'app/profile/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingLogin$: Observable<any>;
  loadingProfile$: Observable<any>;
  loading: boolean;

  constructor(
    private store: Store<fromStore.LoginState>,
    private profileStore: Store<fromProfileStore.ProfileState>,
    private tokenService: TokenService) {
      this.loadingLogin$ = this.store.pipe(select(fromStore.getLoginLoading));
      this.loadingProfile$ = this.profileStore.pipe(select(fromProfileStore.getLoading));
      this.loading = true;
      this.validateToken();
    }

  ngOnInit() { }

  validateToken() {
    const tokenStore = this.tokenService.getToken();
    const validation = this.tokenService.validationExpirationDate();
    if (tokenStore) {
      validation ? this.loadProfile() : this.refreshToken();
    } else {
      this.loading = false;
    }
  }

  loadProfile() {
    this.profileStore.dispatch(new fromProfileStore.LoadProfile());
    this.loading = false;
  }

  refreshToken() {
    this.store.dispatch(new fromStore.VerifyToken());
    this.validateToken();
  }
}
