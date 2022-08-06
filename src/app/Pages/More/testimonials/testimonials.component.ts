import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialsIteams: any;
  testimonialsSubjectItem:any;
  subjectList: any;
  allReviewList: any;
  x: any;

  constructor(private dataService:DataService,) { }

  ngOnInit(): void {
  this.testimonialsIteams=this.dataService.getTestimonials();
  // this.onSelect(this.testimonialsIteams[0]['label'],true);
  this.testimonialsAllReview();
  }

  // course select function
  onSelect(val:any,init?:any) {
    if (val) {
      this.testimonialsIteams.map((res:any) => {
        if(res.label === val){
          this.testimonialsSubjectItem = res.subject;
          if(init){
            this.onSelectSub(this.testimonialsSubjectItem[0]['subJectName']);
          }
        }
      }
      );
    }
  }

  //subject select function
  onSelectSub(val2:any){
    if (val2) {
      this.testimonialsSubjectItem.map((res:any) => {
        if(res.subJectName === val2){
          // this.allReviewList = [];
          this.allReviewList = res.review;
        }
      }
      );
    }
  }

  //Get function for all the TestimonialsAllReview
  testimonialsAllReview(){
    this.allReviewList = [];
    for(let item of this.testimonialsIteams){
      this.subjectList = item.subject;
      for(let list of this.subjectList){
        for(let review of list.review){
        this.allReviewList.push(review);
        console.log(this.allReviewList);
        }
      }
    }
  }

}
