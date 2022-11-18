import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
// import { saveAs } from 'file-saver';
declare var $:any;
@Component({
  selector: 'app-top-medical-countries',
  templateUrl: './top-medical-countries.component.html',
  styleUrls: ['./top-medical-countries.component.css']
})
export class TopMedicalCountriesComponent implements OnInit {
  selectedCountryId: any;
  countriesDetails :any ;
  selectedCountryFaq: any;
  selectedCountryReview: any;
  selectedCountryFeatures: any;
  selectedCountryOverview: any;
  selectedCountryTitle: any;
  selectedCountryCoursePrice: any;
  selectedCountryCourseDiscountPrice: any;
  selectedCountryCoursePrice1: any;
  selectedCountryCourseDiscountPrice1: any;
  selectedCountryExamPattern: any;
  selectedCountrySyllabus: any;
  selectedCountryExamRequirement: any;
  selectedCountryAllTabs: any;
  enrollNowForm: any = FormGroup;
  syllabusDetails:any = FormGroup;
  syllabusDetailsData : AngularFirestoreCollection<any>;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;
  submitted1 = false ;

  
  
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


    this.syllabusDetails = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+(\.[a-zA-Z0-9-]+)*')]],
      phone:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['', [Validators.required]],
      date : new Date(),
    });
    this.syllabusDetailsData = this.db.collection('syllabusDetails');
    this.countriesDetails = this.dataService.getAllMedicineCountries();
    this.router.params.subscribe(params => {
      this.selectedCountryId = params['countrieID'] ;
    //  console.log(this.selectedCountryId);
    this.countryDetailsById(this.selectedCountryId);
    });
   
  }

  countryDetailsById(ID:any){
    for(let details of this.countriesDetails){
      // console.log(details);
      if(details.countrieID == ID){
        this.selectedCountryFaq = details.faq;
        this.selectedCountryReview = details.review;
        this.selectedCountryFeatures = details.PricingAndFeatures;
        this.selectedCountryOverview = details.overView;
        this.selectedCountryTitle = details.title;
        this.selectedCountryCoursePrice = details.price;
        this.selectedCountryCourseDiscountPrice = details.discount;
        this.selectedCountryCoursePrice1 =details.price2;
        this.selectedCountryCourseDiscountPrice1 = details.discount2;
        this.selectedCountryExamPattern = details.examPattern;
        this.selectedCountrySyllabus = details.syllabus;
        this.selectedCountryExamRequirement = details.examRequirement;
        this.selectedCountryAllTabs = details.AllTabs;
        // this.selectedCountryExamRequirementTable = details.table;
      }
    }
  }
  downloadPdf(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = 'assets/PDF/NEET 2022 Syllabus.pdf';
    link.download = `${fileName}.pdf`
    link.click();
  }
  onClickDownloadPdf(){
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.syllabusDetails.invalid) {
      return;
    }
    let base64String = "your-base64-string";
    this.downloadPdf(base64String,"NEET 2022 Syllabus");
  }
  
  get f() {
    return this.enrollNowForm.controls;
  }

  get s() {
    return this.syllabusDetails.controls;
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.enrollNowForm.invalid) {
      return;
    }
    $('#exampleModal').modal('hide');
    this.enrollNowFormData.add(this.enrollNowForm.value).then(res =>{
      this.openModal();
    });
    setTimeout(()=>{
      this.onCloseHandled();
      this.submitted = false ;
      this.enrollNowForm.reset();
    },6000);
  }
  
  display : any;

  // Model Open Funcation
  openModal(){
   this.display='block';
 }

 // Model close Funcation
 onCloseHandled(){
   this.display='none'
 }
}
