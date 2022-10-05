import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BulkuploadComponent } from '../bulkupload/bulkupload.component';


export interface PeriodicElement {
  question:string;
  position: number;
  subject: string;
  topic: string;
  qtype:string;
  level:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, question: 'lorem ipsum', subject: '', topic:'',qtype:'',level:'',action:''},
];
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'question', 'subject','topic','qtype','level','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogBulk(): void {
    const dialogRef = this.dialog.open(BulkuploadComponent, {
     
    });

    // dialogRef.afterClosed().subscribe(() => {
    //   console.log('The dialog was closed');
    // });
  }
}
