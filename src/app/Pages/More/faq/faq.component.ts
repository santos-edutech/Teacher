import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  generalFaqs: any;
  allQAndA: any;
  searchText: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.generalFaqs = this.dataService.getGeneralFaqs();
    this.getQuestionsAns(1);
    this.allQAndA;
  }

  getQuestionsAns(ID:any){
    for(let faqs of this.generalFaqs){
      if(faqs.faq_id == ID){
        this.allQAndA = faqs.faq ;
        // console.log(this.allQAndA);
      }
    }
  }

}
