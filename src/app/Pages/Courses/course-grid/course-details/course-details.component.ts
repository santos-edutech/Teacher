import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
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

  constructor(
    private dataService:DataService,
    private router: ActivatedRoute,
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
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
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
