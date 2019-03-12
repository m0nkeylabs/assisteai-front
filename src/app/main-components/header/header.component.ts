import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'app/login/login.component';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from '@models/profile';

import * as fromStore from 'app/profile/store';
import * as fromLoginStore from 'app/login/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged$: Observable<Profile>;

  constructor(
    private store: Store<fromStore.ProfileState>,
    private storeLogin: Store<fromLoginStore.AuthState>,
    public dialog: MatDialog) {
      this.userLogged$ = this.store.pipe(select(fromStore.getProfile));
    }

  ngOnInit() { }

  openDialog(tabActive): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '90%',
      maxWidth: '400px',
      data: {tab: tabActive}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result = result;
      }
    });
  }

  logout() {
    this.storeLogin.dispatch(new fromLoginStore.Logout());
  }

}
