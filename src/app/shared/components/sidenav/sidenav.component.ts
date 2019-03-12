import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from '@models/profile';
import * as fromStore from 'app/profile/store';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isOpen: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  userLogged$: Observable<Profile>;

  constructor(private store: Store<fromStore.ProfileState>) {
    this.userLogged$ = this.store.pipe(select(fromStore.getProfile));
  }

  ngOnInit() {
  }

  closeNav() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

}
