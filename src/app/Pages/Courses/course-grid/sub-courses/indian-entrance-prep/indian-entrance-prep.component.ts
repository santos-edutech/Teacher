import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-indian-entrance-prep',
  templateUrl: './indian-entrance-prep.component.html',
  styleUrls: ['./indian-entrance-prep.component.css']
})
export class IndianEntrancePrepComponent implements OnInit {

  coinwallet: string[] = ['wallet1','wallet2'];
  selectedwallet = this.coinwallet[0];

  megaMenuItems: any;
  menuItem:any ;
  selectedCourseId: any;
  selecetdSubCourseId:any;
  courseDetails :any ;
  menuItemList :any ;
  selectedSubMenuCourseTitle :any;
  searchText: any;
  allIndianEntrance:any;

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    this.router.params.subscribe(params => {
      this.selectedCourseId = params['menuId'];
      this.selecetdSubCourseId = params ['id'];
      // console.log(this.selectedCourseId);
      this.getSelectedSubmenuCourse(this.selectedCourseId,this.selecetdSubCourseId);
    });
    this.allIndianEntrance = this.dataService.getAllIndianEntrance();
  }

  getSelectedSubmenuCourse(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
        // console.log(menuItems);
      if(menuItems.menuId == MenuId){
        this.menuItemList = menuItems.subMenu;
        for(let subMenuItem of this.menuItemList){
          if(subMenuItem.id == ID){
            this.selectedSubMenuCourseTitle =subMenuItem.title;
          }
        }
      }
    }
  }

}
