import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialsIteams: any;

  constructor(private dataService:DataService,) { }

  ngOnInit(): void {
    this.testimonialsIteams=this.dataService.getTestimonials();
  }

}
