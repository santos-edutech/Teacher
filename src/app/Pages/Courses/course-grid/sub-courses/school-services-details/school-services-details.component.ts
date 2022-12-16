import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { CartService } from 'src/app/Services/cart-service/cart.service';

declare var $:any;
@Component({
  selector: 'app-school-services-details',
  templateUrl: './school-services-details.component.html',
  styleUrls: ['./school-services-details.component.css']
})
export class SchoolServicesDetailsComponent implements OnInit {
  schoolServices: any;
  selectedSchoolService: any;
  selectedSchoolServiceTitle: any;
  selectedSchoolServiceSubTitle: any;
  selectedSubMenuCourseDetails: any;
  selectedSchoolServiceFuture: any;
  selectedSchoolServiceOverview: any;
  selectedSchoolServiceFaqs: any;
  selectedSchoolServiceTestimonials: any;
  selectedSchoolServiceSyllabus: any;
  enrollNowForm: any = FormGroup;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;
  allSchoolServices :any ;
  selectedSubjectPrice: any;
  selectedSubjectDiscountPrice: any;
  selectedSchoolUId: any;

  constructor( 
    public fb: FormBuilder,
    private db: AngularFirestore,
    private router: ActivatedRoute,
    private dataService:DataService,
    private cartservice : CartService,
    private routs: Router,
    ) { }

  ngOnInit(): void {
   
    this.enrollNowFormData = this.db.collection('enrollNowForm');
    this.allSchoolServices = this.dataService.getallSchoolServices();
    // console.log(this.schoolServices);
    this.router.params.subscribe(params => {
      this.selectedSchoolService = params['serviceID'];
      // console.log(this.selectedCourse);
      this.getSelectedSchoolService(this.selectedSchoolService);
      this. buyCourse();
      this.enrollNowForm = this.fb.group({
        name:['', [Validators.required]],
        email:['', [Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
        phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        message:['', [Validators.required]],
        course:this.selectedSchoolServiceTitle,
        date : new Date(),
      });
    });
  }

  getSelectedSchoolService(ID:any){
    this.schoolServices = [];
    for(let serviceList of this.allSchoolServices){
      // console.log(serviceList.program);
      for(let service of serviceList.program){
      if(service.serviceID == ID){
        this.selectedSchoolServiceTitle = service.program_title;
        this.selectedSchoolServiceSubTitle = service.subTitle;
        this.selectedSubMenuCourseDetails = service.details;
        this.selectedSchoolServiceFuture = service.PricingAndFeatures;
        this.selectedSchoolServiceOverview = service.overview;
        this.selectedSchoolServiceFaqs = service.faq;
        this.selectedSchoolServiceTestimonials = service.testimonials;
        this.selectedSchoolServiceSyllabus = service.syllabus;
        this.selectedSubjectPrice = service.price;
        this.selectedSubjectDiscountPrice = service.discount;
        this.selectedSchoolUId = service.uniqueID;
      }
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
      uniqueID : this.selectedSchoolUId,
      menuName : this.selectedSchoolServiceTitle,
      variationCost : this.selectedSubjectPrice,
      qtyTotal: 0,
      // image : this.selecetdCourseOverviewImage,
    });
    // console.log(this.selectedEntranceUId);
  }

 items:any;
  //----- add item to cart
   addToCart() {
    if (!this.cartservice.itemInCart(this.courseItems.value)) {
      this.courseItems.value.qtyTotal = 1 ;
      this.cartservice.addToCart(this.courseItems.value); //add items in cart
      this.items = [...this.cartservice.getItems()];
      this.routs.navigate(['/cart']);
    }else{
      alert("Already in cart");
      this.routs.navigate(['/cart']);
    }
  }
}
