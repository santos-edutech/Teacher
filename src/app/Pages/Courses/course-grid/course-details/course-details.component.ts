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
  result: any;

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
    // console.log(this.result);
    this.courseDetails = this.dataService.geSubjectDetails();
    this.result= this.menuItemList.map((a:any)=>{
      // console.log(a.id);
      let obj2 = this.courseDetails.find((b:any)=> {
        console.log(b);
        return b.title === a.title;
      });
      console.log(obj2);
      if(obj2)
       Object.assign(a,obj2);
      return a;
     });
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
            // console.log(this.SelectedSubMenuCourse);
          }
        }
      }
    }
  }

list(){

}

}
