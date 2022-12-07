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
  AllBlogsNews: any;
  blogNewsId: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allBlogsNews = this.dataService.getNewsBlogs();
    this.getAllNewsBlogs();
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

  getNewsBlogsById(ID:any){
    for(let data of this.allBlogsNews){
      // console.log(data);
      if(data.MenuId == ID){
        // console.log(data.items);
        this.newsblogList = data.items;
      }
    }
  }
  

}
