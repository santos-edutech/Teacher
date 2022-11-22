import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { megaMenuItems } from 'src/app/common-content/header-Iteams';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  selectedCourseId : any;
  megaMenuItems: any;
  selectedCourse: any;
  courseMenuItem:any;
  courseSubMenuItem :any;
  couSubMenuId: any;
  courseMenuName: any;
  searchText: any;
  menuItem: any;
  curriculum: any;
  CourseCardheader: any;
  courseCardTitle: any;
  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.router.params.subscribe(params => {
      this.selectedCourseId = params['menuId'];
      // console.log(this.selectedCourseId);
      this.getSelectedCourse(this.selectedCourseId);
    });
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
  }

  //Get Course Grid By Id
  getSelectedCourse(id:any){
    this.selectedCourseId = id ;
    for (let i = 0; i < this.megaMenuItems.length; i++) {
      this.selectedCourse = this.megaMenuItems[i];
      this.courseMenuItem = this.selectedCourse['normalMenuItems'];
      for (let j = 0; j < this.courseMenuItem.length; j++) {
        const element = this.courseMenuItem[j];
        // console.log(element);
        if(element.menuId==id){
          this.couSubMenuId = element.menuId;
          this.courseMenuName = element.name ;
          this.courseSubMenuItem = element.subMenu;
          this.curriculum = element.curriculum;
          this.CourseCardheader = element.header;
          this.courseCardTitle = element.title

          // console.log(this.courseSubMenuItem);
        }
      }
    }
  }


}


