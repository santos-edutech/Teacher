import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-learning-centre',
  templateUrl: './learning-centre.component.html',
  styleUrls: ['./learning-centre.component.css']
})
export class LearningCentreComponent implements OnInit {

  careerMappingTrackingList:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.careerMappingTrackingList = this.dataService.getCareerMappingTracking();
  }

}
