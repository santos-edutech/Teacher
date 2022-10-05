import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MydialogComponent } from '../mydialog/mydialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  static confirmDialog: any;

  constructor(private dialog : MatDialog) { }

  confirmDialog(){
    this.dialog.open(MydialogComponent);
  }
}
