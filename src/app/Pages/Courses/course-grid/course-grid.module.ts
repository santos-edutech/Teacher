import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridComponent } from './course-grid/course-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';
import { CourseGridRoutingModule } from './course-grid Routes/course-grid-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ApCoursesComponent } from './sub-courses/ap-courses/ap-courses.component';
import { ApCourseDetailsComponent } from './sub-courses/ap-course-details/ap-course-details.component';
import { IvyLeagueCourseComponent } from './sub-courses/ivy-league-course/ivy-league-course.component';
import { MedicalProgramComponent } from './sub-courses/medical-program/medical-program.component';
import { TopMedicalCountriesComponent } from './sub-courses/top-medical-countries/top-medical-countries.component';
import { IndianEntrancePrepComponent } from './sub-courses/indian-entrance-prep/indian-entrance-prep.component';
import { SchoolServicesComponent } from './sub-courses/school-services/school-services.component';
import { IndianEntrancePrepDetailsComponent } from './sub-courses/indian-entrance-prep-details/indian-entrance-prep-details.component';
import { SchoolServicesDetailsComponent } from './sub-courses/school-services-details/school-services-details.component';


@NgModule({
  declarations: [
    CourseGridComponent,
    TestComponent,
    CourseDetailsComponent,
    ApCoursesComponent,
    ApCourseDetailsComponent,
    IvyLeagueCourseComponent,
    MedicalProgramComponent,
    TopMedicalCountriesComponent,
    IndianEntrancePrepComponent,
    SchoolServicesComponent,
    IndianEntrancePrepDetailsComponent,
    SchoolServicesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseGridRoutingModule,
    FormsModule, 
    Ng2SearchPipeModule
  ]
})
export class CourseGridModule { }
