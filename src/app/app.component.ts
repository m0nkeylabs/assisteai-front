import { Component, OnInit } from '@angular/core';
import { TokenService } from '@servicestoken.service';
import { Store } from '@ngrx/store';

import * as fromStore from 'app/login/store';
import * as fromProfileStore from 'app/profile/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assiste-ai';

  constructor(
    private store: Store<fromStore.LoginState>,
    private profileStore: Store<fromProfileStore.ProfileState>,
    private tokenService: TokenService) {}

  ngOnInit() {
    this.validateToken();
  }

  validateToken() {
    const tokenStore = this.tokenService.getToken();
    const validation = this.tokenService.validationExpirationDate();
    if (tokenStore) {
      validation ? this.profileStore.dispatch(new fromProfileStore.LoadProfile()) : this.refreshToken();
    }
  }

  refreshToken() {
    this.store.dispatch(new fromStore.VerifyToken());
    this.validateToken();
  }
}
