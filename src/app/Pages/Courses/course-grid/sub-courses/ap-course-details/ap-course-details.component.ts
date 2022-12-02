import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { CartService } from 'src/app/Services/cart-service/cart.service';
import { PaymentService } from 'src/app/Services/payment-services/payment.service';

declare var $:any;
@Component({
  selector: 'app-ap-course-details',
  templateUrl: './ap-course-details.component.html',
  styleUrls: ['./ap-course-details.component.css'],
  providers: [PaymentService]
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
  selectedCourseImage: any;
  selectedCourseUId: any;

  

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
    private router: ActivatedRoute,
    private dataService:DataService,
    private cartservice : CartService,
    private routs: Router,
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
      this.buyCourse();
    });
  }

  getSelectedCourseDetails(ID:any){
    for(let courses of this.apCourses){
      // this.selectedCourseUId = courses;
      if(courses.apCourseID === ID){
        this.selectedCourseName = courses.apCourseName;
        this.selectedCourseType = courses.apCourseType;
        this.selectedCourseImage = courses.apImage
        this.selectedCoursePrice = courses.price;
        this.selectedCourseDiscount = courses.discount;
        this.selectedCourseOverview = courses.overView;
        this.selectedCourseExamPattern = courses.examPattern;
        this.selectedCourseSyllabus = courses.syllabus;
        this.selectedCoursePriceandFeature = courses.PricingAndFeatures;
        this.selectedCourseFaqs = courses.faq;
        this.selectedCourseReviews = courses.review;
        this.selectedCourseExamDate = courses.examDate;
        this.selectedCourseUId = courses.uniqueID;
       
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
    
    $('#exampleModal').modal('hide');
    this.enrollNowFormData.add(this.enrollNowForm.value).then(res =>{
      this.openModal();
    });
    setTimeout(()=>{
      this.onCloseHandled();
      this.submitted = false ;
      this.enrollNowForm.reset();
    },6000);
  }

  display : any;

  // Model Open Funcation
  openModal(){
   this.display='block';
 }

 // Model close Funcation
 onCloseHandled(){
   this.display='none'
 }

 courseItems : any = FormGroup;

  buyCourse(){
    this.courseItems = this.fb.group({
      uniqueID : this.selectedCourseUId,
      menuName : this.selectedCourseName,
      variationCost : this.selectedCoursePrice,
      qtyTotal: 0,
      image : this.selectedCourseImage, 
    });
    // console.log(this.selectedCourseUId);
  }

  items:any;
  xyz :any ;
  //----- add item to cart
   addToCart() {
    if (!this.cartservice.itemInCart(this.courseItems.value)) {
      this.courseItems.value.qtyTotal = 1;
      this.cartservice.addToCart(this.courseItems.value); //add items in cart
      this.items = [...this.cartservice.getItems()];
      this.routs.navigate(['/cart']);
    }else{
      alert("Already in cart");
      this.routs.navigate(['/cart']);
    }
  }

}
