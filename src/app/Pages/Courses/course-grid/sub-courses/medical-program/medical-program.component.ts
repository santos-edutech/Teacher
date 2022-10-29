import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-medical-program',
  templateUrl: './medical-program.component.html',
  styleUrls: ['./medical-program.component.css']
})
export class MedicalProgramComponent implements OnInit {
  megaMenuItems: any;
  menuItem: any;
  selectedCourseId: any;
  selecetdSubCourseId: any;
  courseDetails: any;
  menuItemList: any;
  selectedSubMenuCourseTitle: any;

  topCountries :any ;

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
    this.topCountries = this.dataService.getAllMedicineCountries();
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
        for(let subMenuItem of this.menuItemList){
          if(subMenuItem.id == ID){
            this.selectedSubMenuCourseTitle =subMenuItem.title;
            // this.selectedSubMenuCourseDetails = subMenuItem.details;
            // this.selectedSubjectOverview = subMenuItem.overView;
            // this.selectedSubjectFaqs = subMenuItem.faq ;
            // this.selectedSubjectPriceAndFeatures = subMenuItem.PricingAndFeatures;
            // this.selectedSubjectSyllabus = subMenuItem.syllabus;
            // this.selectedSubjectOverviewImage = subMenuItem.overViewImage;
            // this.selectedSubjectPrice = subMenuItem.price;
            // this.selectedSubjectDiscountPrice = subMenuItem.discount;
            // this.selectedCourseReviews = subMenuItem.review;
            // this.selecetdCourseOverviewContent = subMenuItem.overViewContent;
          }
        }
      }
    }
  }

}
