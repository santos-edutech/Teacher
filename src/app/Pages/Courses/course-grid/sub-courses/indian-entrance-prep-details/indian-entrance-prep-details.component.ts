import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

declare var $:any;
@Component({
  selector: 'app-indian-entrance-prep-details',
  templateUrl: './indian-entrance-prep-details.component.html',
  styleUrls: ['./indian-entrance-prep-details.component.css']
})
export class IndianEntrancePrepDetailsComponent implements OnInit {
  indianEntrance: any;
  selectedEntrance :any;
  selectedEntranceTitle: any;
  selectedEntranceFaqs: any;
  selectedEntranceOverview: any;
  selectedEntrancePricingAndFeatures: any;
  selectedEntranceExamPattern: any;
  selectedEntrancePrice: any;
  selectedEntrancePrice2: any;
  selectedEntranceDiscountPrice: any;
  selectedEntranceDiscountPrice2: any;
  selectedEntranceSyllabus: any;
  enrollNowForm: any = FormGroup;
  syllabusDetails:any = FormGroup;
  syllabusDetailsData : AngularFirestoreCollection<any>;
  enrollNowFormData : AngularFirestoreCollection<any>;
  submitted = false ;
  submitted1 = false ;
  selectedEntranceTestimonials: any;
  

  constructor(
    public fb: FormBuilder,
    // public vb: FormBuilder,
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

    this.indianEntrance = this.dataService.getAllIndianEntrance();
    this.router.params.subscribe(params => {
      this.selectedEntrance = params['entranceID'];
      // console.log(this.selectedCourse);
      this.getSelectedEntranceDetails(this.selectedEntrance);
    });
  }

  getSelectedEntranceDetails(ID:any){
    for(let entrance of this.indianEntrance){
      if(entrance.entranceID === ID){
        this.selectedEntranceTitle = entrance.title;
        this.selectedEntranceFaqs = entrance.faq;
        this.selectedEntranceOverview = entrance.overview;
        this.selectedEntrancePricingAndFeatures = entrance.PricingAndFeatures;
        this.selectedEntranceExamPattern = entrance.examPattern;
        this.selectedEntrancePrice = entrance.price;
        this.selectedEntrancePrice2 = entrance.price2;
        this.selectedEntranceDiscountPrice = entrance.discount;
        this.selectedEntranceDiscountPrice2 = entrance.discount2;
        this.selectedEntranceSyllabus = entrance.ExamSyllabus;
        this.selectedEntranceTestimonials = entrance.testimonials;
      }
    }
  }

  
  downloadPdf(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = 'assets/PDF/JEE Mains Paper-1 Syllabus.pdf';
    link.download = `${fileName}.pdf`
    link.click();
  }
  downloadPdfBitSat(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = 'assets/PDF/BITSAT.pdf';
    link.download = `${fileName}.pdf`
    link.click();
  }
  downloadPdfClat(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = 'assets/PDF/CLAT.pdf';
    link.download = `${fileName}.pdf`
    link.click();
  }
  onClickDownloadPdf(){
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.syllabusDetails.invalid) {
      return;
    }
    // console.log(this.selectedEntrance);
    if(this.selectedEntrance == 1){
      let base64String = "your-base64-string";
    this.downloadPdf(base64String,"JEE Mains Paper-1 Syllabus");
    }else if(this.selectedEntrance == 2){
      let base64String = "your-base64-string";
    this.downloadPdfBitSat(base64String,"BITSAT Syllabus");
    }else if(this.selectedEntrance == 3){
      let base64String = "your-base64-string";
      this.downloadPdfClat(base64String,"CLAT Syllabus");
    }
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
