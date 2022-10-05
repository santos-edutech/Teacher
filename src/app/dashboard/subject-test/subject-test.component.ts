import { Component, OnInit } from '@angular/core';


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
  {position: 1, name: 'ICSE 10th Exam', segment: 'K12 Curriculum', grade:'10th',curriculum:'ICSE',package:'1month',level:'',question:'',action:''},
];
@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.css']
})
export class SubjectTestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'segment','grade','curriculum','package','level','question','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
  constructor() { }

  ngOnInit(): void {
  }

}
