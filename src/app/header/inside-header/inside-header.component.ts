import { Component, OnInit } from '@angular/core';
import { megaMenuItems } from 'src/app/common-content/header-Iteams';

@Component({
  selector: 'app-inside-header',
  templateUrl: './inside-header.component.html',
  styleUrls: ['./inside-header.component.css']
})
export class InsideHeaderComponent implements OnInit {

  megaMenuItems: any;
  selectedCourseId: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.getMegaMenu();
  }

  getMegaMenu(){
    return megaMenuItems;
  }
  
}
