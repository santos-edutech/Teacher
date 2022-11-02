import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-abroad-education',
  templateUrl: './abroad-education.component.html',
  styleUrls: ['./abroad-education.component.css']
})
export class AbroadEducationComponent implements OnInit {

  megaMenuItems: any;
  menuItem: any;
  courseSubMenuItem: any;
  selectedCourse: any;
  couSubMenuId: any;
  courseMenuName: any;

  constructor(private dataService:DataService,) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    // console.log(this.menuItem[0]['menuId']);
    this.getSelectedCourse(this.menuItem[0]['menuId']);
  }

  getSelectedCourse(ID:any){
    for(let item of this.menuItem){
      if(item.menuId==ID){
        this.courseSubMenuItem = item.subMenu;
        this.couSubMenuId = item.menuId;
        this.courseMenuName = item.name ;
      }
    }
  }

}
