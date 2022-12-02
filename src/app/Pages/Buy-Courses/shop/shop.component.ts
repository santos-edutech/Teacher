import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart-service/cart.service';
import { DataService } from 'src/app/Services/data.service';
import { PaymentService } from 'src/app/Services/payment-services/payment.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [PaymentService]
})
export class ShopComponent implements OnInit {

  megaMenuItems: any;
  menuItem: any;
  courseSubMenuItem: any;
  selectedCourse: any;
  couSubMenuId: any;
  courseMenuName: any;
  searchText: any;
  courseId: any ;
  allSegmentList:any;
  buyCoursesList:any;
  programList:any;


  constructor(
    private router: Router,
    private dataService:DataService,
    private cartservice : CartService
  ) { }

  ngOnInit(): void {
    // this.megaMenuItems = this.dataService.getMegaMenu();
    // this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    this.allSegmentList = this.dataService.getAllBuyCourses();
    // this.allCoursesSubjects();
    this.getAllBuyCourse();
  }

  getAllBuyCourse(){
    this.buyCoursesList = [];
    for(let segment of this.allSegmentList){
      this.programList = segment.program;
      // console.log(this.programList);
      for(let courseList of this.programList){
        // console.log(courseList.course);
        for(let list of courseList.course){
            this.buyCoursesList.push(list) ;
            // console.log(this.buyCoursesList);
        }
      }
    }
  }

   // course select function
   onSelect(val:any,init?:any) {
    if (val) {
      this.allSegmentList.map((res:any) => {
        if(res.segment === val){
          this.programList = res.program;
          // console.log(this.programList);
          if(init){
            this.onSelectSub(this.programList[0]['course']);
          }
        }
      }
      );
    }
  }
  buyCoursesLists: any;
  //subject select function
  onSelectSub(val2:any){
    this.buyCoursesLists = [];
    // if(val2 === "All"){
    //   this.allSegmentList.map((res:any) => {
    //     this.programList = res.program;
    //     this.programList.map((data:any) => {
    //       this.buyCoursesList = data.course;
    //       this.buyCoursesLists = data.course;
    //       console.log( this.buyCoursesList);
    //     })
    //   });
    // }
    if (val2) {
      this.programList.map((res:any) => {
        if(res.program_title === val2){
          // console.log(res.program_title);
          this.buyCoursesList = res.course;
        }
      }
      );
    }
  }

 
  items :any;

   //----- add item to cart
   addToCart(item:any) {
    if (!this.cartservice.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartservice.addToCart(item); //add items in cart
      this.items = [...this.cartservice.getItems()];
      this.router.navigate(['/cart']);
    }else{
      alert("Already in cart");
      this.router.navigate(['/cart']);
    }
  }

}
