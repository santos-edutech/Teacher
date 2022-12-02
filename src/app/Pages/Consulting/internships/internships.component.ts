import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  allInternshipItems: any ;
  InternshipList : any ;
  allInternshipList: any;
  internshipListMenuId: any;
  InternshipListName: any;
  InternshipListItem: any;
  internshipAllList: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allInternshipItems=this.dataService.getAllInternships();
    // console.log(this.allInternshipItems);
    this.getInternship();
    this.getSelectedInternship(1);
  }

  getInternship(){
    this.InternshipList=[];
    for(let jobLists of this.allInternshipItems){
      // console.log(jobLists);
      this.allInternshipList = jobLists.item;
      for(let item of this.allInternshipList){
        this.InternshipList.push(item);
        // console.log(this.InternshipList);
      }
    }
  }

  getSelectedInternship(ID:any){
    for(let data of this.allInternshipItems){
      // console.log(data);
      if(data.MenuId == ID){
        console.log(data.MenuId);
        this.internshipAllList = data.item;
        this.InternshipListName = data.title;
        
        // console.log( this.internshipAllList);
      }
    }
  }

}
