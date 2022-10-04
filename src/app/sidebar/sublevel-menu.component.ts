import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="data.items && data.items.length > 0 " class="sublevel-nav">
        <li *ngFor="let item of data.items" class="sublevel-nav-item">
            <a class="sublevel-nav-link" *ngIf="item.items && item.items.length >0">
              <i class="sublevel-link-icon fa fa-circle"></i>
              <span class="sublevel-link-text">{{item.label}}</span>
          </a>
          <a class="sublevel-nav-link" *ngIf="item.items || (item.items && item.items.length === 0 )"
          routerLink="[item.link]"
          routerLinkActive="active-sublevel"
          routerLinkActiveOptions="{exact: true}"
          >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text">{{item.label}}</span>
        </a>
        <div *ngIf="item.items && item.items.length >0" >
          
        </div>
        </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.css']
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
  handelClick(item: any): void{
    if(this.data.items && this.data.items.length >0){
      for(let modelItem of this.data.items){
        // if(item !==){

        // }
      }
    }
  }
}
