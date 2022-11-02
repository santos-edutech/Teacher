import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  selectedCategoryId: any;
  categoryDetails: any;
  SelectedCategoryname: any;

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.categoryDetails = this.dataService.getallCatecories();
    this.router.params.subscribe(params => {
      this.selectedCategoryId = params['categoryID'] ;
      console.log(this.selectedCategoryId);
    this.categoryDetailsById(this.selectedCategoryId);
    });
  }
  categoryDetailsById(ID:any){
    for(let category of this.categoryDetails){
      if(category.categoryID === ID){
        this.SelectedCategoryname = category.name;
        console.log(this.SelectedCategoryname);
      }
    }
  }

}
