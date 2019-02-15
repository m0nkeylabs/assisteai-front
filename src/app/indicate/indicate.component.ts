import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ratings } from '@constants/ratings';

import * as _ from 'lodash';

@Component({
  selector: 'app-indicate',
  templateUrl: './indicate.component.html',
  styleUrls: ['./indicate.component.scss']
})
export class IndicateComponent implements OnInit {

  formGroup: FormGroup;

  ratingEnum = ratings;
  ratingArray = _.keys(ratings);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<IndicateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      url: [this.data.url, Validators.required],
      rating: ['', Validators.required],
      commentary: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  teste() {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }
}
