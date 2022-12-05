import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ap-courses',
  templateUrl: './ap-courses.component.html',
  styleUrls: ['./ap-courses.component.css']
})
export class ApCoursesComponent implements OnInit {

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
  apCourses : any;
  searchText: any;

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    this.router.params.subscribe(params => {
      this.selectedCourseId = params['menuId'];
      this.selecetdSubCourseId = params ['id'];
      // console.log(this.selectedCourseId);
      this.getSelectedSubmenuCourse(this.selectedCourseId,this.selecetdSubCourseId);
    });
    this.courseDetails = this.dataService.geSubjectDetails();
    this.apCourses = this.dataService.getAllApCourses();
    // console.log(this.apCourses);
  }


  menuId:any;
  getSelectedSubmenuCourse(MenuId:any,ID:any){
    this.selecetdSubCourseId = ID;
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
        this.menuId =menuItems.menuId;
        // console.log(this.menuId);
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
          }
        }
      }
    }
  }

}
