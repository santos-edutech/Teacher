import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
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
  enrollNowForm: any = FormGroup;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;

  

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.enrollNowForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+(\.[a-zA-Z0-9-]+)*')]],
      phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required]],
      date : new Date(),
    });
    this.enrollNowFormData = this.db.collection('enrollNowForm');
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

  get f() {
    return this.enrollNowForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.enrollNowForm.invalid) {
      return;
    }
    
  }
}
