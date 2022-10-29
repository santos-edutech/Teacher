import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

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

  constructor(
    private router: ActivatedRoute,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
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
}
