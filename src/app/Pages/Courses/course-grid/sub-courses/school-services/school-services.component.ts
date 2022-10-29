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
  searchText: any;
  schoolServiceList: any;
  
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
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
        for(let subMenuItem of this.menuItemList){
          if(subMenuItem.id == ID){
            this.selectedSubMenuCourseTitle =subMenuItem.title;
          }
        }
      }
    }
  }

}
