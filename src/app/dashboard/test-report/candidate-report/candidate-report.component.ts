import { AfterViewInit, Component, OnInit ,ViewChild  } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-candidate-report',
  templateUrl: './candidate-report.component.html',
  styleUrls: ['./candidate-report.component.css']
})
export class CandidateReportComponent implements OnInit, AfterViewInit {

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
