import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-learning-partner',
  templateUrl: './learning-partner.component.html',
  styleUrls: ['./learning-partner.component.css']
})
export class LearningPartnerComponent implements OnInit {

  learningPatnerList : any ;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.learningPatnerList = this.dataService.getLearningPatner();
  }

}
