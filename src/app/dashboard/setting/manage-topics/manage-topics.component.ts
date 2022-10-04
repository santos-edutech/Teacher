import { AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-manage-topics',
  templateUrl: './manage-topics.component.html',
  styleUrls: ['./manage-topics.component.css']
})
export class ManageTopicsComponent implements OnInit, AfterViewInit {

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