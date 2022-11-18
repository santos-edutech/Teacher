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

  constructor(
    private dataService:DataService,
    public fb: FormBuilder,
    public router : Router,
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {
  
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
onSubmitTest(){
  this.submitted1 = true;
  // stop here if form is invalid
  if (this.testDetails.invalid) {
    return;
  }
  if(this.testDetails){
    this.router.navigate(['/details-register-for-test']);
  }
  
}

}
