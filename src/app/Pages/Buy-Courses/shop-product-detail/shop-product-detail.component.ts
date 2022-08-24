import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-shop-product-detail',
  templateUrl: './shop-product-detail.component.html',
  styleUrls: ['./shop-product-detail.component.css']
})
export class ShopProductDetailComponent implements OnInit {

  selectedSubjectId: any ;
  componetData : any ;
  megaMenuItems: any;
  menuItem: any;
  selectedSubjectTitle: any ;
  selectedCourseId : any ;

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    this.router.params.subscribe(params =>{
      this.selectedCourseId = params['menuId'];
      this.selectedSubjectId = params ['id'];
      this.getSelectedSubject(this.selectedCourseId,this.selectedSubjectId);
    });
  }

  getSelectedSubject(MenuId:any,ID:any){
    for(let menuItems of this.menuItem){
      if(menuItems.menuId == MenuId){
        for(let subMenuItem of menuItems.subMenu){
          if(subMenuItem.id == ID){
            this.selectedSubjectTitle = subMenuItem.title ;
            console.log(this.selectedSubjectTitle);
          }
        }
      }
    }
  }

}
