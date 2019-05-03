import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formName: FormGroup;

  lastForm = '';
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

  constructor(private profileStore: Store<fromProfileStore.ProfileState>, private fb: FormBuilder) {
    this.userLogged$ = this.profileStore.pipe(select(fromProfileStore.getProfile));
  }

  ngOnInit() {
    this.userLoggedSub = this.userLogged$.subscribe(r => {
      if (r) {
        this.profile = _.cloneDeep(r);
        this.setValueForms();
      }
    });

    this.formName = this.fb.group({
      name: ['' , [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnDestroy() {
    this.userLoggedSub.unsubscribe();
  }

  setValueForms() {
    this.formName.controls.name.setValue(this.profile.name);
  }

  updateProfile(profile) {
    this.profileStore.dispatch(new fromProfileStore.UpdateProfile(profile));
  }

  formatDate(date) {
    return date;
  }

  openForm(form) {
    this.heightForms = { name: '0', email: '0', avatar: '0', theme: '0', password: '0', language: '0', social: '0', account: '0' };
    this.lastForm = form;
    this.setHeight(form, this.formOpenned);
    this.formOpenned = this.formOpenned === form ? '' : form;
  }

  updateTheme(theme) {
    this.profile.theme = theme;
    this.updateProfile(this.profile);
  }

  updateName() {
    if (this.formName.valid) {
      this.profile.name = this.formName.controls.name.value;
      this.updateProfile(this.profile);
    }
  }

  setHeight(form, formOpenned) {
    let height = '';
    switch (form) {
      case 'name':
        height = (document.getElementsByClassName('container-name')[0].clientHeight + 10) + 'px';
        this.heightForms.name = formOpenned !== 'name' ? height : '0';
        break;
      case 'email':
        height = (document.getElementsByClassName('container-email')[0].clientHeight + 10) + 'px';
        this.heightForms.email = formOpenned !== 'email' ? height : '0';
        break;
      case 'avatar':
        height = (document.getElementsByClassName('container-avatar')[0].clientHeight + 10) + 'px';
        this.heightForms.avatar = formOpenned !== 'avatar' ? height : '0';
        break;
      case 'theme':
        height = (document.getElementsByClassName('container-theme')[0].clientHeight + 10) + 'px';
        this.heightForms.theme = formOpenned !== 'theme' ? height : '0';
        break;
      case 'password':
        height = (document.getElementsByClassName('container-password')[0].clientHeight + 10) + 'px';
        this.heightForms.password = formOpenned !== 'password' ? height : '0';
        break;
      case 'language':
        height = (document.getElementsByClassName('container-language')[0].clientHeight + 10) + 'px';
        this.heightForms.language = formOpenned !== 'language' ? height : '0';
        break;
      case 'social':
        height = (document.getElementsByClassName('container-social')[0].clientHeight + 10) + 'px';
        this.heightForms.social = formOpenned !== 'social' ? height : '0';
        break;
      case 'account':
        height = (document.getElementsByClassName('container-account')[0].clientHeight + 10) + 'px';
        this.heightForms.account = formOpenned !== 'account' ? height : '0';
        break;
      default:
        break;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.lastForm) {
      this.setHeight(this.lastForm, '');
    }
  }
}
