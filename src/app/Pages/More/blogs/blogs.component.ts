import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  allBlogsNews: any;
  newsblogList: any;
  allNewsblog: any;
  newsblogTitle: any;
  newsblogLink: any;
  newsblogImage: any;
  newsblogDesc: any;
  newsblogSubTitle: any;
  newsblogId: any;
  newsblogDetails: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allBlogsNews = this.dataService.getNewsBlogs();
    // console.log(this.allBlogsNews) ;
    this.getAllNewsBlogs();
    this.getSelectedInternship(1);
  }

  getAllNewsBlogs(){
    this.newsblogList = [];
    for(let newsblogLists of this.allBlogsNews){
      this.allNewsblog = newsblogLists;
      // console.log(this.allNewsblog.items);
      for(let item of this.allNewsblog.items){
        // console.log(item);
        this.newsblogList.push(item);
      }
    }
  }

  getSelectedInternship(ID:any){
    for(let data of this.newsblogList){
      if(data.id == ID){
        this.newsblogId = data.id;
        this.newsblogTitle = data.title;
        this.newsblogSubTitle = data.subtitle;
        this.newsblogLink = data.link;
        this.newsblogImage = data.image;
        this.newsblogDesc = data.desc;
        this.newsblogDetails = data.details;
        // console.log(this.newsblogId);
      }
    }
  }

}
