import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  allJobItems: any ;
  allJobList:any ;
  jobList : any ;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allJobItems=this.dataService.getAllJobs();
    this.getJobs();
  }

  getJobs(){
    this.jobList=[];
    for(let jobLists of this.allJobItems){
      this.allJobList = jobLists.jobs;
      for(let list of this.allJobList){
        this.jobList.push(list);
      }
    }
  }

}
