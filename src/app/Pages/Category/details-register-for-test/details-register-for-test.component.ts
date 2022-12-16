import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  allListRegisterForTest: any;
  allGeadeList: any;
  allStreamList: any;
  allbranchList:any;
  testDetails: any;

  constructor(
    private router: Router,
    private dataService:DataService,
    public fb: FormBuilder,
  ) {
          //  console.log(this.router.getCurrentNavigation()?.extras.state); 
        this.getTestId = this.router.getCurrentNavigation()?.extras.state;
        console.log( this.getTestId.id);
   }

  ngOnInit(): void {
    this.allListRegisterForTest = this.dataService.getallRegTest();
    
    this.allTestList = this.dataService.getTestList()
    this.getAllTestList();
    // this.AllRegTestList = this.dataService.getallRegTest();
    // this.getallRegTest();

    // this.getallRegById();

    this.testDetails = this.fb.group({
      segement:['', [Validators.required]],
      grade:['', [Validators.required]],
      stream:['', [Validators.required]],
      branch:['', [Validators.required]],
      region:['', [Validators.required]],
      date : new Date(),
    });
  }
  

  onSelectSegment(val:any){
    this.allGeadeList = this.dataService.getAllGrade().filter(data=>data.segment_id==val);
}
onSelectGrade(val:any){
  this.allStreamList = this.dataService.getAllStream().filter(data=>data.grade_id==val);
}
onSelectStream(val:any){
  this.allbranchList = this.dataService.getBranchList().filter(data=>data.stream_id==val);
}
val3:any;
onSelectBranch(val:any){
  // this.allGeadeList = this.dataService.getAllGrade().filter(data=>data.segment_id==val);
  this.val3 = val ;
}

  getAllTestList(){
    this.registerForTest = [];
    for(let testList of this.allTestList){
      // console.log(testList);
      if(testList.branch_id === this.getTestId.id){
        for(let testData of testList.test_data){
          // console.log(testData);
          this.registerForTest.push(testData);
        }
      }
      
    }
  }
  onSubmitTest(ID:any){
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
      // console.log(registerList);
     
   
   
    // this.router.navigate(['/details-register-for-test']);
    // this.submitted1 = true;
    // stop here if form is invalid
    if (this.testDetails.invalid) {
      return;
    }
    if(this.testDetails){
      this.router.navigate(['/details-register-for-test'],{state:{id:this.val3}});
      // for(let item of this.allListRegisterForTest){
      //   console.log(item);
      // }
      // this.router.navigate(['/details-register-for-test'],{state:{id:this.val3}});
    }
    
  }
  clearFunction(){
    this.testDetails.select = "";
  }

  
}
