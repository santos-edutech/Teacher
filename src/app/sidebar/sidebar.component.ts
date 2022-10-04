import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  object: any;
  constructor() { }

  ngOnInit(): void {
    this.object = navbarData;
  }

  dashboard(){
    
  }

}
