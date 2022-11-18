import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-school-services',
  templateUrl: './school-services.component.html',
  styleUrls: ['./school-services.component.css']
})
export class SchoolServicesComponent implements OnInit {
  megaMenuItems: any;
  menuItem:any ;
  selectedCourseId: any;
  selecetdSubCourseId:any;
  courseDetails :any ;
  menuItemList :any ;
  selectedSubMenuCourseTitle :any;
  selectedSubMenuCourseDetails: any;
  searchText: any;
  schoolServiceList: any;
  schoolService: any;
  schoolCoursesList: any;
  
  
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
    this.schoolServiceList = this.dataService.getallSchoolServices();
    this.getallSchoolService();
  }
  
  programList:any;
  cat:any;
  getallSchoolService(){
    this.schoolCoursesList = [];
    for(let list of this.schoolServiceList){
      this.cat=list.category
      this.programList = list.program;
      // console.log(this.programList);
      for(let programItems of this.programList){
        this.schoolCoursesList.push(programItems);
      }
    }
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
        for(let subMenuItem of this.menuItemList){
          if(subMenuItem.id == ID){
            this.selectedSubMenuCourseTitle =subMenuItem.title;
            this.selectedSubMenuCourseDetails =subMenuItem.details;
          }
        }
      }
    }
  }

 // course select function
 onSelect(val:any) {
  if (val) {
    this.schoolServiceList.map((res:any) => {
      if(res.category === val ){
        this.schoolCoursesList = res.program;
      }
    });
  }
}

programs:any;
onSelectgrade(val1:any){
  // console.log(val1);
  this.schoolCoursesList = [];
  if(val1){
    this.schoolServiceList.map((res:any) => {
      this.programs = res.program ;
      this.programs.map((data:any) => {
        // console.log(data);
        if(data.grade === val1){
          this.schoolCoursesList.push(data);
          console.log(this.schoolCoursesList);
        }
      });
    });
  }
}

}
