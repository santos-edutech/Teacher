import { Component, OnInit } from '@angular/core';

  
export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  grade: string;
  phone:string;
  curriculum:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '', email: '', grade:'',phone:'',curriculum:'',action:''},
];
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'email','grade','phone','curriculum','action'];
  dataSource = ELEMENT_DATA;
  allAdmins: any;
  constructor() { }

  ngOnInit(): void {
  }

}
