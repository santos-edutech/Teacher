import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { megaMenuItems } from 'src/app/common-content/header-Iteams';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  subMenuItems: any;
  selectedSubMenuId: any;
  selectedSubMenu:any;
  subMenuItem: any;
  courseItem: any;
  currentCourseItem: any;

  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subMenuItems = this.getMegaMenu();
    this.router.params.subscribe(params => {
      this.selectedSubMenuId = params['id'];
      // console.log(this.selectedSubMenuId);
      this.selectedSubMenuById(this.selectedSubMenuId);
    });
  }

  getMegaMenu(){
    return megaMenuItems;
  }

  selectedSubMenuById(id:any){
    for (let i = 0; i < this.subMenuItems.length; i++) {
      this.selectedSubMenu = this.subMenuItems[i];
      this.subMenuItem = this.selectedSubMenu['normalMenuItems'];
      for (let j = 0; j < this.subMenuItem.length; j++) {
        const element = this.subMenuItem[j];
        this.courseItem = element.subMenu;
        console.log(this.courseItem);
        for (let k = 0; k < this.courseItem.length; k++) {
          const subElement = this.courseItem[k];
          // console.log(subElement.id);
          if(subElement.id==id){
            this.currentCourseItem=subElement;
            console.log(this.currentCourseItem);
          }
        }
      }
    }
  }

}
