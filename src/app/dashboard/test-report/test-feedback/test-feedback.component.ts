import { AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-test-feedback',
  templateUrl: './test-feedback.component.html',
  styleUrls: ['./test-feedback.component.css']
})
export class TestFeedbackComponent implements OnInit, AfterViewInit{

 
  @ViewChild('dataTable', { static: false }) table:any;
  dataTable:any;
  constructor() { }
 

  ngOnInit(): void { 
  }
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
