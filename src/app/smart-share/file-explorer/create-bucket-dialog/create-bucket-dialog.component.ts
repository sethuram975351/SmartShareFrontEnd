import {Component, Inject, OnInit} from '@angular/core';

import {DialogData} from '../file-explorer.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-bucket-dialog',
  templateUrl: './create-bucket-dialog.component.html',
  styleUrls: ['./create-bucket-dialog.component.less']
})
export class CreateBucketDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateBucketDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
