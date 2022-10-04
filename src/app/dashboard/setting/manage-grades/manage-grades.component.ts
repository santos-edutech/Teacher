import {AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-manage-grades',
  templateUrl: './manage-grades.component.html',
  styleUrls: ['./manage-grades.component.css']
})
export class ManageGradesComponent implements OnInit, AfterViewInit {

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
