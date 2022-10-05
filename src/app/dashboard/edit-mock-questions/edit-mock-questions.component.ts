import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MydialogComponent } from '../mydialog/mydialog.component';

@Component({
  selector: 'app-edit-mock-questions',
  templateUrl: './edit-mock-questions.component.html',
  styleUrls: ['./edit-mock-questions.component.css']
})
export class EditMockQuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
  // ngOnInit(): void {
  // }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

