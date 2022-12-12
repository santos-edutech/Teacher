import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-for-test',
  templateUrl: './register-for-test.component.html',
  styleUrls: ['./register-for-test.component.css']
})
export class RegisterForTestComponent implements OnInit {

  personalDetails:any = FormGroup;
  testDetails:any =  FormGroup;
  // educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  submitted = false ;
  submitted1 = false ;
  allListRegisterForTest: any ;
  allRegisterList: any;
  registerforTest: any;
  allRegisterListSegment: any;
  allRegisterListGrade: any;
  allGradeDetails: any;
  selectedStreamName: any;
  allGrade: any;
  selectedStream: any;
  selectedTest: any;
  selectedId: any;
  allGeadeList: any;
  allStreamList: any;
  allbranchList: any;

  constructor(
    private dataService:DataService,
    public fb: FormBuilder,
    public router : Router,
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {

  this.allListRegisterForTest = this.dataService.getallRegTest();
  // this.allGeadeList = this.dataService.getAllGrade().filter(data=>data.siShow===true);
  // this.allStreamList = this.dataService.getAllStream().filter(data=>data.siShow===true);
  // this.allbranchList = this.dataService.getBranchList().filter(data=>data.siShow===true);
  
  
  this.personalDetails = this.fb.group({
    fname:['', [Validators.required]],
    lname:['', [Validators.required]],
    email:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+(\.[a-zA-Z0-9-]+)*')]],
    phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    date : new Date(),
  });

  this.testDetails = this.fb.group({
    segement:['', [Validators.required]],
    grade:['', [Validators.required]],
    stream:['', [Validators.required]],
    branch:['', [Validators.required]],
    region:['', [Validators.required]],
    date : new Date(),
  });
  this.getAllTest();
  // this.xyz();
}

// xyz(){
//   // console.log(this.allGeadeList);
//   for(let obj of this.allGeadeList){
//     console.log(obj);
//   }
// }



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
strem:any ;
getAllTest(){
  // this.allGradeDetails = [];
  this.registerforTest = [];
  // for(let registerList of this.allListRegisterForTest){
  //   for(let obj of registerList.grade){
  //     for(let test of obj.grade_Details){
  //       this.registerforTest.push(test)
  //     // console.log(this.registerforTest);
  //     this.selectedStream = test.stream;
  //     this.selectedTest = test.test;
  //     // console.log(this.selectedStream);
  //     }
  //   }
  // }
}

get f() {
  return this.personalDetails.controls;
}
get g(){
  return this.testDetails.controls;
}

get personal() { return this.personalDetails.controls; }

get address() { return this.testDetails.controls; }


onSubmit(){
  this.submitted = true;
  // stop here if form is invalid
  if (this.personalDetails.invalid) {
    return;
  }
  if(this.step==1){
        this.personal_step = true;
        if (this.personalDetails.invalid) { return  }
       this.step++
    }
  
}

previous(){
this.step--

if(this.step==1){
this.address_step = false;
}
if(this.step==2){
this.education_step = false;
}

}

// submit(){

// if(this.step==3){
// this.education_step = true;
// if (this.testDetails.invalid) { return }
// alert("Well done!!")
// }
// }

onSubmitTest(ID:any){
  this.registerforTest = [];
  for(let registerList of this.allListRegisterForTest){
    // for(let obj of registerList.grade){
    //   for(let test of obj.grade_Details){
    //     this.registerforTest.push(test)
    //   // console.log(this.registerforTest);
    //   this.selectedId = test.id;
    //   this.selectedStream = test.stream;
    //   this.selectedTest = test.test;
    //   // console.log(this.selectedStream);
    //   }
    // }
    console.log(registerList);
   
  }
 
  // this.router.navigate(['/details-register-for-test']);
  this.submitted1 = true;
  // stop here if form is invalid
  if (this.testDetails.invalid) {
    return;
  }
  if(this.testDetails){
    // for(let item of this.allListRegisterForTest){
    //   console.log(item);
    // }
    this.router.navigate(['/details-register-for-test'],{state:{id:this.val3}});
  }
  
}



}
