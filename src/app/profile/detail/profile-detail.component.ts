import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Profile } from '@models/profile';

import * as utilsFunctions from '@shared/utils';
import * as fromProfileStore from 'app/profile/store';
import * as _ from 'lodash';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

  utils = utilsFunctions;
  userLogged$: Observable<Profile>;
  userLoggedSub: Subscription;
  profile: Profile;
  tabActive: number;
  formOpenned: string;
  heightformsContainers: any;
  heightForms = {
    name: '0',
    email: '0',
    avatar: '0',
    theme: '0',
    password: '0',
    language: '0',
    social: '0',
    account: '0'
  };
  colorsTheme = ['YELLOW', 'GREEN', 'PINK', 'RED', 'BLUE'];

  constructor(private profileStore: Store<fromProfileStore.ProfileState>) {
    this.userLogged$ = this.profileStore.pipe(select(fromProfileStore.getProfile));
  }

  ngOnInit() {
    this.userLoggedSub = this.userLogged$.subscribe(r => {
      this.profile = r;
    });
  }

  ngOnDestroy() {
    this.userLoggedSub.unsubscribe();
  }

  updateProfile(profile) {
    this.profileStore.dispatch(new fromProfileStore.UpdateProfile(profile));
  }

  formatDate(date) {
    return date;
  }

  openForm(form) {
    this.setHeight(form);
    this.formOpenned = this.formOpenned === form ? '' : form;
  }

  updateTheme(theme) {
    const newProfile = _.cloneDeep(this.profile);
    newProfile.theme = theme;
    this.updateProfile(newProfile);
  }

  setHeight(form) {
    let height = '';
    this.heightForms = { name: '0', email: '0', avatar: '0', theme: '0', password: '0', language: '0', social: '0', account: '0' };
    switch (form) {
      case 'name':
        height = (document.getElementsByClassName('container-name')[0].clientHeight + 10) + 'px';
        this.heightForms.name = this.formOpenned !== 'name' ? height : '0';
        break;
      case 'email':
        height = (document.getElementsByClassName('container-email')[0].clientHeight + 10) + 'px';
        this.heightForms.email = this.formOpenned !== 'email' ? height : '0';
        break;
      case 'avatar':
        height = (document.getElementsByClassName('container-avatar')[0].clientHeight + 10) + 'px';
        this.heightForms.avatar = this.formOpenned !== 'avatar' ? height : '0';
        break;
      case 'theme':
        height = (document.getElementsByClassName('container-theme')[0].clientHeight + 10) + 'px';
        this.heightForms.theme = this.formOpenned !== 'theme' ? height : '0';
        break;
      case 'password':
        height = (document.getElementsByClassName('container-password')[0].clientHeight + 10) + 'px';
        this.heightForms.password = this.formOpenned !== 'password' ? height : '0';
        break;
      case 'language':
        height = (document.getElementsByClassName('container-language')[0].clientHeight + 10) + 'px';
        this.heightForms.language = this.formOpenned !== 'language' ? height : '0';
        break;
      case 'social':
        height = (document.getElementsByClassName('container-social')[0].clientHeight + 10) + 'px';
        this.heightForms.social = this.formOpenned !== 'social' ? height : '0';
        break;
      case 'account':
        height = (document.getElementsByClassName('container-account')[0].clientHeight + 10) + 'px';
        this.heightForms.account = this.formOpenned !== 'account' ? height : '0';
        break;
      default:
        break;
    }
  }
}
