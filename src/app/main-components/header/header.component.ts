import { Component, OnInit } from '@angular/core';
import { TokenService } from '@servicestoken.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'app/login/login.component';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from 'app/login/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  login$: Observable<any>;

  constructor(
    private store: Store<fromStore.LoginState>,
    public dialog: MatDialog,
    private tokenService: TokenService) {
      this.login$ = this.store.pipe(select(fromStore.getLogin));
    }

  ngOnInit() {
    this.isLogged = this.tokenService.hasToken();
  }

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
    this.tokenService.removeStorage();
  }

}
