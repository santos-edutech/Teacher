import { Component, OnInit } from '@angular/core';
import { megaMenuItems } from '../common-content/header-Iteams';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  megaMenuItems: any;
  
  constructor(
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
  }

}
