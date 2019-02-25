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
  title = 'assiste-ai';

  constructor(
    private store: Store<fromStore.LoginState>,
    private storeProfile: Store<fromProfileStore.ProfileState>,
    private tokenService: TokenService) {}

  ngOnInit() {
    const tokenStore = this.tokenService.getToken();
    const validation = this.tokenService.validationExpirationDate();
    if (tokenStore) {
      validation ? this.storeProfile.dispatch(new fromProfileStore.LoadProfile()) :
                   console.log('Tentar refresh token');
    }
  }
}
