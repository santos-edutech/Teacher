import { Injectable } from '@angular/core';
import { generalFaqs } from '../common-content/faqs';
import { megaMenuItems } from '../common-content/header-Iteams';
import { allJobs } from '../common-content/jobs';
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

  //Get GeneralFaqs Details function
  getGeneralFaqs(){
    return generalFaqs;
  }

  getAllJobs(){
    return allJobs;
  }

}
