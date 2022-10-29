import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  megaMenuItems: any;
  menuItem: any;
  courseSubMenuItem: any;
  selectedCourse: any;
  couSubMenuId: any;
  courseMenuName: any;
  counsellingForm:any = FormGroup;
  userData : AngularFirestoreCollection<any>;
  isSubmit = true ;
  display : any;

  constructor(private dataService:DataService,public fb: FormBuilder,private db: AngularFirestore,) { }

  ngOnInit(): void {
    this.megaMenuItems = this.dataService.getMegaMenu();
    this.menuItem = this.megaMenuItems[0]['normalMenuItems'];
    // console.log(this.menuItem[0]['menuId']);
    this.getSelectedCourse(this.menuItem[0]['menuId']);
    this.userData = this.db.collection('counselling');
    this.counsellingForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required]],
      phone:['', [Validators.required]],
      city:['', [Validators.required]],
    });
  }

  getSelectedCourse(ID:any){
    for(let item of this.menuItem){
      if(item.menuId==ID){
        this.courseSubMenuItem = item.subMenu;
        this.couSubMenuId = item.menuId;
        this.courseMenuName = item.name ;
      }
    }
  }

  onSumbit(){
    $('#staticBackdrop').modal('hide');
    this.userData.add(this.counsellingForm.value).then(res =>{
      this.openModal();
    });
    this.isSubmit = true ;
    setTimeout(()=>{
      this.onCloseHandled();
      this.isSubmit = false ;
      this.counsellingForm.reset();
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

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  

}
