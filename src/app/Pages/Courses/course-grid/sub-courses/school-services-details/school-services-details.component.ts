import { Component, OnInit } from '@angular/core';
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

  constructor( 
    private router: ActivatedRoute,
    private dataService:DataService,
    ) { }

  ngOnInit(): void {
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

}
