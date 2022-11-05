import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-school-services-details',
  templateUrl: './school-services-details.component.html',
  styleUrls: ['./school-services-details.component.css']
})
export class SchoolServicesDetailsComponent implements OnInit {
  schoolServices: any;
  selectedSchoolService: any;
  selectedSchoolServiceTitle: any;
  selectedSchoolServiceSubTitle: any;
  selectedSchoolServiceFuture: any;
  selectedSchoolServiceOverview: any;
  selectedSchoolServiceFaqs: any;
  enrollNowForm: any = FormGroup;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;

  constructor( 
    public fb: FormBuilder,
    private db: AngularFirestore,
    private router: ActivatedRoute,
    private dataService:DataService,
    ) { }

  ngOnInit(): void {
    this.enrollNowForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+(\.[a-zA-Z0-9-]+)*')]],
      phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message:['', [Validators.required]],
      date : new Date(),
    });
    this.enrollNowFormData = this.db.collection('enrollNowForm');
    this.schoolServices = this.dataService.getallSchoolServices();
    this.router.params.subscribe(params => {
      this.selectedSchoolService = params['serviceID'];
      // console.log(this.selectedCourse);
      this.getSelectedSchoolService(this.selectedSchoolService);
    });
  }

  getSelectedSchoolService(ID:any){
    for(let service of this.schoolServices){
      if(service.serviceID == ID){
        this.selectedSchoolServiceTitle = service.title;
        this.selectedSchoolServiceSubTitle = service.subTitle;
        this.selectedSchoolServiceFuture = service.PricingAndFeatures;
        this.selectedSchoolServiceOverview = service.overview;
        this.selectedSchoolServiceFaqs = service.faq;
      }
    }
  }

  get f() {
    return this.enrollNowForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.enrollNowForm.invalid) {
      return;
    }
    
  }

}
