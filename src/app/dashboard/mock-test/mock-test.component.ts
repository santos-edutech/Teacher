import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  segment: string;
  grade: string;
  curriculum:string;
  package:string;
  level:string;
  question:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ICSE 10th Exam', segment: 'K12 Curriculum', grade:'10th',curriculum:'ICSE',package:'1month',level:'',question:'+',action:''},
];


@Component({
  selector: 'app-mock-test',
  templateUrl: './mock-test.component.html',
  styleUrls: ['./mock-test.component.css']
})
export class MockTestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'segment','grade','curriculum','package','level','question','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
  constructor() { }

  ngOnInit(): void {
  }

  
}
