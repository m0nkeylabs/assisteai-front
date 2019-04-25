import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from '@models/profile';

import * as utilsFunctions from '@shared/utils';
import * as fromProfileStore from 'app/profile/store';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  utils = utilsFunctions;
  userLogged$: Observable<Profile>;

  constructor(private profileStore: Store<fromProfileStore.ProfileState>) {
    this.userLogged$ = this.profileStore.pipe(select(fromProfileStore.getProfile));
  }

  ngOnInit() {
  }

  updateProfile(profile, theme) {
    profile.theme = theme;
    this.profileStore.dispatch(new fromProfileStore.UpdateProfile(profile));
  }

  formatDate(date) {
    return date;
  }
}
