import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ap-course-details',
  templateUrl: './ap-course-details.component.html',
  styleUrls: ['./ap-course-details.component.css']
})


export class ApCourseDetailsComponent implements OnInit {
  selectedCourse: any;
  apCourses: any;
  selectedCourseName: any;
  selectedCourseType: any;
  selectedCoursePrice: any;
  selectedCourseDiscount: any;
  selectedCourseOverview: any;
  selectedCourseExamPattern: any;
  selectedCourseSyllabus: any;
  selectedCoursePriceandFeature: any;
  selectedCourseFaqs: any;
  selectedCourseReviews: any;
  selectedCourseExamDate: any;

  

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.apCourses = this.dataService.getAllApCourses();
    this.router.params.subscribe(params => {
      this.selectedCourse = params['apCourseID'];
      // console.log(this.selectedCourse);
      this.getSelectedCourseDetails(this.selectedCourse);
    });
  }

  getSelectedCourseDetails(ID:any){
    for(let courses of this.apCourses){
      // console.log(courses);
      if(courses.apCourseID === ID){
        this.selectedCourseName = courses.apCourseName;
        this.selectedCourseType = courses.apCourseType;
        this.selectedCoursePrice = courses.price;
        this.selectedCourseDiscount = courses.discount;
        this.selectedCourseOverview = courses.overView;
        this.selectedCourseExamPattern = courses.examPattern;
        this.selectedCourseSyllabus = courses.syllabus;
        this.selectedCoursePriceandFeature = courses.PricingAndFeatures;
        this.selectedCourseFaqs = courses.faq;
        this.selectedCourseReviews = courses.review;
        this.selectedCourseExamDate = courses.examDate;
      }
    }
  }

}
