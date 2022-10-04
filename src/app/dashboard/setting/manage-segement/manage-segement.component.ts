import { AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-manage-segement',
  templateUrl: './manage-segement.component.html',
  styleUrls: ['./manage-segement.component.css']
})
export class ManageSegementComponent implements OnInit, AfterViewInit {

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