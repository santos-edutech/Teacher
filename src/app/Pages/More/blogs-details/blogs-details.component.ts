import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {
  newsBlog: any;
  selectednewsblog: any;
  selectednewsblogTitle: any;
  selectednewsblogSubTitle: any;
  selectednewsblogDesc: any;
  selectednewsblogDetails: any;
  selectednewsblogWriter: any;
  selectednewsblogImage: any;


  constructor(
    private dataService:DataService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.newsBlog = this.dataService.getNewsBlogs();
    this.router.params.subscribe(params =>{
      this.selectednewsblog = params['MenuId'];
      // console.log(this.selectednewsblog);
      this.getSelectedBlogNewsDetails(this.selectednewsblog);
    })
  }
  getSelectedBlogNewsDetails(ID:any){
    for(let blogs of this.newsBlog){
      // console.log(blogs.items);
      if(blogs.MenuId === ID){
        for(let news of blogs.items){
          this.selectednewsblogTitle = news.title;
          this.selectednewsblogSubTitle = news.subtitle;
          this.selectednewsblogImage = news.image;
          this.selectednewsblogDesc = news.desc;
          this.selectednewsblogDetails = news.details;
          this.selectednewsblogWriter = news.writer;
        }
       
      }
    }
  }

}
