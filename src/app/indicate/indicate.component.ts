import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ratings } from '@constants/ratings';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import * as fromStore from 'app/indicate/store';
import * as _ from 'lodash';


@Component({
  selector: 'app-indicate',
  templateUrl: './indicate.component.html',
  styleUrls: ['./indicate.component.scss']
})
export class IndicateComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  indicateLoaded$: Observable<boolean>;
  indicateLoadedSub: Subscription;

  isSaved: boolean;
  formGroup: FormGroup;

  ratingEnum = ratings;
  ratingArray = _.keys(ratings);

  constructor(
    private store: Store<fromStore.IndicateState>,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<IndicateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isLoading$ = this.store.pipe(select(fromStore.getLoading));
      this.indicateLoaded$ = this.store.pipe(select(fromStore.getLoaded));
    }

  ngOnInit() {
    this.formGroup = this.fb.group({
      url: [this.data.url, Validators.required],
      rating: ['', Validators.required],
      comment: ['']
    });

    this.indicateLoadedSub = this.indicateLoaded$.subscribe(result => {
      if (result) {
        this.toastr.success('<i class="material-icons">done</i>Indicação realizada com sucesso!', '', { enableHtml: true });
        this.store.dispatch(new fromStore.IndicateClear());
        this.dialogRef.close(true);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveIndication() {
    if (this.formGroup.valid) {
      this.store.dispatch(new fromStore.IndicateSave(this.formGroup.value));
    }
  }

  ngOnDestroy() {
    this.indicateLoadedSub.unsubscribe();
  }
}
