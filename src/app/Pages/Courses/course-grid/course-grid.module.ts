import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridComponent } from './course-grid/course-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';
import { CourseGridRoutingModule } from './course-grid Routes/course-grid-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApCoursesComponent } from './sub-courses/ap-courses/ap-courses.component';
import { ApCourseDetailsComponent } from './sub-courses/ap-course-details/ap-course-details.component';
import { IvyLeagueCourseComponent } from './sub-courses/ivy-league-course/ivy-league-course.component';
import { MedicalProgramComponent } from './sub-courses/medical-program/medical-program.component';
import { TopMedicalCountriesComponent } from './sub-courses/top-medical-countries/top-medical-countries.component';
import { IndianEntrancePrepComponent } from './sub-courses/indian-entrance-prep/indian-entrance-prep.component';
import { SchoolServicesComponent } from './sub-courses/school-services/school-services.component';
import { IndianEntrancePrepDetailsComponent } from './sub-courses/indian-entrance-prep-details/indian-entrance-prep-details.component';
import { SchoolServicesDetailsComponent } from './sub-courses/school-services-details/school-services-details.component';
import { AngularFireModule } from '@angular/fire/compat';
import {  AngularFirestoreModule, } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { CareerNavigationDetailsComponent } from './sub-courses/career-navigation-details/career-navigation-details.component';
import { AbroadTransferProgramComponent } from './sub-courses/under-graduate/abroad-transfer-program/abroad-transfer-program.component';
import { AbroadMastersPlacementComponent } from './sub-courses/under-graduate/abroad-masters-placement/abroad-masters-placement.component';
import { AbroadPhdProgramComponent } from './sub-courses/post-graduate/abroad-phd-program/abroad-phd-program.component';

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
    SchoolServicesDetailsComponent,
    CareerNavigationDetailsComponent,
    AbroadTransferProgramComponent,
    AbroadMastersPlacementComponent,
    AbroadPhdProgramComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseGridRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class CourseGridModule { }
