import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  segment: string;
  grade: string;
  curriculum:string;
  package:string;
  test:string;
  question:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ICSE 10th Exam', segment: 'K12 Curriculum', grade:'10th',curriculum:'ICSE',package:'1month',test:'',question:'',action:''},
];
@Component({
  selector: 'app-topic-wise-test',
  templateUrl: './topic-wise-test.component.html',
  styleUrls: ['./topic-wise-test.component.css']
})
export class TopicWiseTestComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'segment','grade','curriculum','package','test','question','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
  constructor() { }

  ngOnInit(): void {
  }

}
