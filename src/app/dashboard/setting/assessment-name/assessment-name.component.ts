import {AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-assessment-name',
  templateUrl: './assessment-name.component.html',
  styleUrls: ['./assessment-name.component.css']
})
export class AssessmentNameComponent implements OnInit, AfterViewInit {

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