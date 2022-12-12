import { Injectable } from '@angular/core';
import { apCourses } from '../common-content/apCourses';
import { allCourseForBuy } from '../common-content/buyCourses';
import { generalFaqs } from '../common-content/faqs';
import { megaMenuItems } from '../common-content/header-Iteams';
import { IndianEntrancePrepDetails } from '../common-content/indian-entrance-list';
import { allJobs } from '../common-content/jobs';
import { careerMappingTracking } from '../common-content/learning-center';
import { learningPatner } from '../common-content/learning-partner';
import { medicineCountries } from '../common-content/medicine-country';
import { schoolServices } from '../common-content/school-services';
import { subjectDetails } from '../common-content/subject-details';
import { testimonials } from '../common-content/testimonials';
import { allCategories} from '../common-content/allCategory';
import { allGrade, allRegTest, allStreamList, branchList, testList } from '../common-content/register-for-test';
import { AllInternship } from '../common-content/internships';
import { NewsBlog } from '../common-content/newes-blog';

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
//Get All Internships
  getAllInternships(){
    return AllInternship;
  }
  // GET apcourses Function
  getAllApCourses(){
    return apCourses;
  }

   // GET Medicin country Function
  getAllMedicineCountries(){
    return medicineCountries
  }

  // GET all buycourse Funcation
  getAllBuyCourses(){
    return allCourseForBuy;
  }

  // Get allIndianEntrance Funcation
  getAllIndianEntrance(){
    return IndianEntrancePrepDetails
  }

  // Get All School Services
  getallSchoolServices(){
    return schoolServices;
  }

  //Get All Categories
  getallCatecories(){
    return allCategories;
  }

  //Get All Register for Test
  getallRegTest(){
    return allRegTest;
  }

  // getAllSegment(){
  //   return allSegmentList;
  // }

  //Get News & Blogs
  getNewsBlogs(){
    return NewsBlog;
  }

  getAllGrade(){
    return allGrade;
  }
  
  getAllStream(){
    return allStreamList;
  }
  getBranchList(){
    return branchList;
  }
  getTestList(){
    return testList;
  }
  
}
