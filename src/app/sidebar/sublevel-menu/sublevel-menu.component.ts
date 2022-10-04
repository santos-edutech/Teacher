import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from '../helper';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrls: ['./sublevel-menu.component.css']
})
export class SublevelMenuComponent implements OnInit {
  @Input() data: INavbarData = {
    link : '',
    icon : '',
    label : '',
    items : []
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
