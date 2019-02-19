import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ratings } from '@constants/ratings';

import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup;
  formRegister: FormGroup;
  formForgetPassword: FormGroup;

  ratingEnum = ratings;
  ratingArray = _.keys(ratings);

  isForgetPassword: boolean;
  tabActive: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

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
  }

  onNoClick(): void {
    this.dialogRef.close();
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
