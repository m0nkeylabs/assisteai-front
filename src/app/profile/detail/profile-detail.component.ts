import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('formName') formName: ElementRef;

  utils = utilsFunctions;
  userLogged$: Observable<Profile>;
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

  constructor(private profileStore: Store<fromProfileStore.ProfileState>) {
    this.userLogged$ = this.profileStore.pipe(select(fromProfileStore.getProfile));
  }

  ngOnInit() {}

  ngAffterInit() {
    this.heightformsContainers = {
      name: document.getElementsByClassName('container-name')[0].clientHeight + 'px',
      email: document.getElementsByClassName('container-email')[0].clientHeight + 'px',
      avatar: 0,
      theme: 0,
      password: 0,
      language: 0,
      social: 0,
      account: 0
    };
  }

  updateProfile(profile, theme) {
    profile.theme = theme;
    this.profileStore.dispatch(new fromProfileStore.UpdateProfile(profile));
  }

  formatDate(date) {
    return date;
  }

  getClass(classe) {
    console.log(classe);
    return classe;
  }

  openForm(form) {
    this.setHeight(form);
    this.formOpenned = this.formOpenned === form ? '' : form;
  }

  setHeight(form) {
    let height = '';
    this.heightForms = { name: '0', email: '0', avatar: '0', theme: '0', password: '0', language: '0', social: '0', account: '0' };
    switch (form) {
      case 'name':
        height = document.getElementsByClassName('container-name')[0].clientHeight + 'px';
        this.heightForms.name = this.formOpenned !== 'name' ? height : '0';
        break;
      case 'email':
        height = document.getElementsByClassName('container-email')[0].clientHeight + 'px';
        this.heightForms.email = this.formOpenned !== 'email' ? height : '0';
        break;
      case 'avatar':
        height = document.getElementsByClassName('container-avatar')[0].clientHeight + 'px';
        this.heightForms.avatar = this.formOpenned !== 'avatar' ? height : '0';
        break;
      case 'theme':
        height = document.getElementsByClassName('container-theme')[0].clientHeight + 'px';
        this.heightForms.theme = this.formOpenned !== 'theme' ? height : '0';
        break;
      case 'password':
        height = document.getElementsByClassName('container-password')[0].clientHeight + 'px';
        this.heightForms.password = this.formOpenned !== 'password' ? height : '0';
        break;
      case 'language':
        height = document.getElementsByClassName('container-language')[0].clientHeight + 'px';
        this.heightForms.language = this.formOpenned !== 'language' ? height : '0';
        break;
      case 'social':
        height = document.getElementsByClassName('container-social')[0].clientHeight + 'px';
        this.heightForms.social = this.formOpenned !== 'social' ? height : '0';
        break;
      case 'account':
        height = document.getElementsByClassName('container-account')[0].clientHeight + 'px';
        this.heightForms.account = this.formOpenned !== 'account' ? height : '0';
        break;
      default:
        break;
    }
  }
}
