import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ratings } from '@constants/ratings';

import { Store, select } from '@ngrx/store';
import { Observable, empty } from 'rxjs';

import * as fromStore from 'app/login/store';
import * as _ from 'lodash';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loadingLogin$: Observable<any>;
  login$: Observable<any>;

  formSignIn: FormGroup;
  formRegister: FormGroup;
  formForgetPassword: FormGroup;

  ratingEnum = ratings;
  ratingArray = _.keys(ratings);

  isForgetPassword: boolean;
  tabActive: string;

  constructor(
    private store: Store<fromStore.LoginState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.login$ = this.store.pipe(select(fromStore.getLogin));
      this.loadingLogin$ = this.store.pipe(select(fromStore.getLoginLoading));
    }

  ngOnInit() {
    this.tabActive = this.data.tab;

    this.formSignIn = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formForgetPassword = this.fb.group({
      email: ['', Validators.required]
    });

    this.login$.subscribe(result => {
      if (result) {
        this.dialogRef.close();
      }
    });

    window.fbAsyncInit = () => {
      FB.init({
          appId: '2074647832674974',
          cookie : true,
          xfbml: true,
          version: 'v3.10'
      });
      FB.AppEvents.logPageView();
    };

    ((d, s, id) => {
      let fjs: any;
      let js: any;
      js = d.getElementsByTagName(s)[0];
      fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loginFacebook() {
    FB.login((response) => {
      if (response.authResponse) {
        const paramsLogin = {
          type: 'facebook',
          token: response.authResponse.accessToken
        };
        this.store.dispatch(new fromStore.Login(paramsLogin));
      } else {
        console.log('User login failed');
      }
    });
  }

  signIn() {
    if (this.formSignIn.valid) {
      this.dialogRef.close(this.formSignIn.value);
    }
  }

  forgetPassword() {
    if (this.formForgetPassword.valid) {
      this.dialogRef.close(this.formSignIn.value);
    }
  }

  register() {
    if (this.formRegister.valid) {
      this.dialogRef.close(this.formSignIn.value);
    }
  }

  setForgetPassword() {
    this.isForgetPassword = !this.isForgetPassword;
  }
}
