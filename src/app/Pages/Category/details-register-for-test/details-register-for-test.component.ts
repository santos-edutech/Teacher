import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-details-register-for-test',
  templateUrl: './details-register-for-test.component.html',
  styleUrls: ['./details-register-for-test.component.css']
})
export class DetailsRegisterForTestComponent implements OnInit {
  AllRegisterTestList: any;
  AllRegTestList: any;
  programList: any;
  buyCoursesList: any;
  registerforTest: any;
  selectedStream: any;
  gradeDetails: any;
  allTestList: any;
  testData:any
  registerForTest: any;
  getTestId: any;


  constructor(
    private router: Router,
    private dataService:DataService,
  ) {
          //  console.log(this.router.getCurrentNavigation()?.extras.state); 
        this.getTestId = this.router.getCurrentNavigation()?.extras.state;
        console.log( this.getTestId.id);
   }

  ngOnInit(): void {
    this.allTestList = this.dataService.getTestList()
    this.getAllTestList();
    // this.AllRegTestList = this.dataService.getallRegTest();
    // this.getallRegTest();

    // this.getallRegById();
  }

  getAllTestList(){
    this.registerForTest = [];
    for(let testList of this.allTestList){
      // console.log(testList);
      if(testList.branch_id === this.getTestId.id){
        for(let testData of testList.test_data){
          console.log(testData);
          this.registerForTest.push(testData);
        }
      }
      
    }
  }

  // getallRegTest(){
  //   this.registerforTest = [];
  //   for(let registerList of this.AllRegTestList){
  //     for(let obj of registerList.grade){
  //       for(let test of obj.grade_Details){
  //         this.gradeDetails = obj.grade_Details
  //         this.registerforTest.push(test);
  //         this.selectedStream = test.stream;
  //       // console.log(this.selectedStream);
  //       }
  //     }
  //   }
  // }

// getallRegById(ID:any){
//   this.registerforTest = [];
//   for(let registerList of this.AllRegTestList){
//     for(let obj of registerList.grade){
//       for(let test of obj.grade_Details){
//         this.gradeDetails = obj.grade_Details
//        if(test.id == ID){
//         this.registerforTest = test.test;
//        }
//       }
//     }
//   }
// }
}
