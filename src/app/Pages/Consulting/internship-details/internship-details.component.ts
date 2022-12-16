import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {  ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { CartService } from 'src/app/Services/cart-service/cart.service';

declare var $:any;
@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.css']
})
export class InternshipDetailsComponent implements OnInit {

  selectedCourseId: any;
  megaMenuItems: any;
  menuItem: any;
  courseSubMenuItem: any;
  subItemList: any;
  subMenuItem: any;
  selecetdSubCourseId: any;
  menuItemList: any;
  selectedSubMenuCourseTitle: any;
  selectedSubMenuCourseDetails: any;
  courseDetails : any;
  selectedSubjectOverview :any ;
  selectedSubjectFaqs : any ;
  selectedSubjectPriceAndFeatures:any;
  selectedSubjectSyllabus:any ;
  selectedSubjectOverviewImage:any;
  selectedSubjectPrice : any;
  selectedSubjectDiscountPrice:any;
  selectedCourseReviews: any;
  selecetdCourseOverviewContent: any;
  enrollNowForm: any = FormGroup;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;
  selectedCourseUId: any;
  selectedSubjectImage: any;
  selectedMenuId: any;
  selectedId: any;


  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
    private dataService:DataService,
    private router: ActivatedRoute,
    private cartservice : CartService,
    private routs: Router,
  ) { }

  ngOnInit(): void {
   
    this.enrollNowFormData = this.db.collection('enrollNowForm');
    this.megaMenuItems = this.dataService.getAllInternships();
    
    this.menuItem = this.megaMenuItems;
    // console.log(this.menuItem)
    // for(let data of this.menuItem){
    //   this.selectedMenuId = data.MenuId;
    // }
    // for(let item of this.selectedMenuId){
    //   this.selectedId = item.id;
    //   console.log(this.selectedId);
    // }
    //this.getSelectedSubmenuCourse(this.selectedMenuId,this.selectedId);
    this.router.params.subscribe(params => {
      this.selectedCourseId = params['MenuId'];
      this.selecetdSubCourseId = params ['id'];
      // console.log(this.selecetdSubCourseId);
      this.getSelectedSubmenuCourse(this.selectedCourseId,this.selecetdSubCourseId);
    });
    this.courseDetails = this.dataService.geSubjectDetails();
    // this.buyCourse();
    this.enrollNowForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required]],
      course:this.selectedSubMenuCourseTitle,
      date : new Date(),
    });
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.item;
        for(let subMenuItem of this.menuItemList){
          if(subMenuItem.id == ID){
            this.selectedSubMenuCourseTitle =subMenuItem.title;
            this.selectedSubMenuCourseDetails = subMenuItem.details;
            this.selectedSubjectOverview = subMenuItem.overView;
            this.selectedSubjectFaqs = subMenuItem.faq ;
            this.selectedSubjectPriceAndFeatures = subMenuItem.PricingAndFeatures;
            this.selectedSubjectSyllabus = subMenuItem.syllabus;
            this.selectedSubjectOverviewImage = subMenuItem.overViewImage;
            this.selectedSubjectPrice = subMenuItem.price;
            this.selectedSubjectDiscountPrice = subMenuItem.discount;
            this.selectedCourseReviews = subMenuItem.review;
            this.selecetdCourseOverviewContent = subMenuItem.overViewContent;
            this.selectedCourseUId = subMenuItem.uniqueID;
            this.selectedSubjectImage = subMenuItem.image;
            // console.log(this.selectedCourseUId);
          }
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

}
