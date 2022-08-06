import { Injectable } from '@angular/core';
import { megaMenuItems } from '../common-content/header-Iteams';
import { careerMappingTracking } from '../common-content/learning-center';
import { learningPatner } from '../common-content/learning-partner';
import { subjectDetails } from '../common-content/subject-details';
import { testimonials } from '../common-content/testimonials';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMegaMenu(){
    return megaMenuItems;
  }

  //Get testimonialsiteam function
  getTestimonials(){
    return testimonials;
  }

  //Get LearningPatnerList function
  getLearningPatner(){
    return learningPatner;
  }

  //Get careerMappingTracking function
  getCareerMappingTracking(){
    return careerMappingTracking;
  }

  //Get subject Details function
  geSubjectDetails(){
    return subjectDetails;
  }

}
