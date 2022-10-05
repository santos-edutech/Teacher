import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  segment: string;
  grade: string;
  curriculum:string;
  assigned:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ICSE 10th Exam', segment: 'K12 Curriculum', grade:'10th',curriculum:'ICSE',assigned:'',action:''},
];
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {

  
  displayedColumns: string[] = ['position', 'name', 'segment','grade','curriculum','assigned','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
  constructor() { }

  ngOnInit(): void {
  }

}
