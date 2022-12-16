import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm:any = FormGroup;
  userData : AngularFirestoreCollection<any>;
  sumbmitMessage="Thank you for contacting us.";
  display : any;

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.userData = this.db.collection('contactus');
    this.contactUsForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required]],
      date: new Date(),
    });
  }

  submitted = false;

  get f() {
    return this.contactUsForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    this.userData.add(this.contactUsForm.value).then(res =>{
      this.openModal();
    });
    setTimeout(()=>{
      this.onCloseHandled();
      this.contactUsForm.reset();
      this.submitted = false;
    },6000);
  }

   // Model Open Funcation
   openModal(){
    this.display='block';
  }

  // Model close Funcation
  onCloseHandled(){
    this.display='none'
  }
  

}
