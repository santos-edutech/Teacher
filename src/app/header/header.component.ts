import { Component, OnInit } from '@angular/core';
import { megaMenuItems } from '../common-content/header-Iteams';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  megaMenuItems: any;
  selectedCourseId: any;
  selectedCourse: any;
  courseMenuItem: any;
  courseSubMenuItem: any;
  
  constructor() { }

  ngOnInit(): void {
    this.megaMenuItems = this.getMegaMenu();
  }

  getMegaMenu(){
    return megaMenuItems;
  }

}
