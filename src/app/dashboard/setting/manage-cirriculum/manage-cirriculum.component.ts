import { AfterViewInit, Component, OnInit ,ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-manage-cirriculum',
  templateUrl: './manage-cirriculum.component.html',
  styleUrls: ['./manage-cirriculum.component.css']
})
export class ManageCirriculumComponent implements OnInit,AfterViewInit {

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
