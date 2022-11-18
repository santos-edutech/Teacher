import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-details-register-for-test',
  templateUrl: './details-register-for-test.component.html',
  styleUrls: ['./details-register-for-test.component.css']
})
export class DetailsRegisterForTestComponent implements OnInit {
  AllRegisterTestList: any;
  AllRegTestList: any;
  programList: any;
  buyCoursesList: any;


  constructor(
    private router: Router,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.AllRegTestList = this.dataService.getallRegTest();
    this.getallRegTest();
  }

  getallRegTest(){
    this.AllRegisterTestList = [];
    for(let segment of this.AllRegTestList){
      this.programList = segment.program;
      // console.log(this.programList);
      for(let courseList of this.programList){
        // console.log(courseList.course);
        for(let list of courseList.course){
            this.AllRegisterTestList.push(list) ;
            // console.log(this.buyCoursesList);
        }
      }
    }
  }

}
