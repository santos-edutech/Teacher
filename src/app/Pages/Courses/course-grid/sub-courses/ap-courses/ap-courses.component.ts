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
        if(menuItems.menuId === MenuId){
          this.menuItemList = menuItems.subMenu;
        // console.log(this.menuItemList);
        for(let itm of this.menuItemList){
          // console.log(itm);
          if(itm.id === ID){
            console.log(itm);
          var  objectLenght = Object.keys(itm).length;
          // var  objectLenght =  Object.keys(itm).filter((v:any) => v.length)
          console.log(objectLenght);
          this.selecetdSubCourseId = itm.id;
          this.selectedSubMenuCourseTitle = itm.title;
          this.selectedSubMenuCourseDetails = itm.details;
          
          }
        }
      }
    }
  }

}
