import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
// import { saveAs } from 'file-saver';
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
  // selectedCountryExamRequirementTable: any;

  // downloadPdf(){
  //   let blob = new Blob(['assets/PDF/sample.pdf'] ,{type:'application/pdf;charset=utf-8'});
  //   saveAs( blob , 'sample.pdf')
  // }
  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
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
    let base64String = "your-base64-string";
    this.downloadPdf(base64String,"NEET 2022 Syllabus");
  }
 
}
