import { Component, OnInit } from '@angular/core';
import { TokenService } from '@servicestoken.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'app/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  constructor(
    public dialog: MatDialog,
    private tokenService: TokenService) { }

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

}
