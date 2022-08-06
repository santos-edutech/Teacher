import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  megaMenuItems: any;
  menuItem: any;
  courseSubMenuItem: any;
  selectedCourse: any;
  couSubMenuId: any;
  courseMenuName: any;
  searchText: any;

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    // console.log(this.menuItem[0]['menuId']);
    this.allCoursesSubjects();
  }


  //Select course by category
  onSelect(val:any) {
    // console.log(val);
    if (val) {
      this.menuItem.map((res:any) => {
        if(res.name == val){
          this.courseSubMenuItem = res.subMenu;
        }
      }
      );
    }
  }

  //Get function for all courses subjects
  allCoursesSubjects(){
    this.courseSubMenuItem =[];
    for(let courses of this.menuItem){
      // this.courseSubMenuItem = courses.subMenu;
      for(let subject of courses.subMenu){
        this.courseSubMenuItem.push(subject);
      }
    }
  }

}
