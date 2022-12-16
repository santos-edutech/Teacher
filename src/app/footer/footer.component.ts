import { Component, HostListener, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { footerItems } from '../common-content/footer-Iteam';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';

declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerItems : any;
  display:any;

  websiteLoadpopupData:any = FormGroup;
  userData : AngularFirestoreCollection<any>;

  @HostListener('window:load', ['$event'])
  onLoad() {
    setTimeout(function(){
      $('#myModal').modal('show');
    }, 10000);
  }


  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.footerItems = this.getFooter();
    this.onLoad();
    this.userData = this.db.collection('websiteLoadpopupData');
    this.websiteLoadpopupData = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      // mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['', [Validators.required]],
      date: new Date(),
    });
  }

  submitted = false;


 get f() {
    return this.websiteLoadpopupData.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.websiteLoadpopupData.invalid) {
      return;
    }
    $('#myModal').modal('hide');
      this.userData.add(this.websiteLoadpopupData.value).then(res =>{
        this.openModal();
      });
      setTimeout(()=>{
        this.onCloseHandled();
        this.submitted = false ;
        this.websiteLoadpopupData.reset();
      },6000);
  }


  getFooter(){
    return footerItems;
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
