import { Routes } from "@angular/router";
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { CourseGridComponent } from "../course-grid/course-grid.component";
import { ApCourseDetailsComponent } from "../sub-courses/ap-course-details/ap-course-details.component";
import { ApCoursesComponent } from "../sub-courses/ap-courses/ap-courses.component";
import { CareerNavigationDetailsComponent } from "../sub-courses/career-navigation-details/career-navigation-details.component";
import { IndianEntrancePrepDetailsComponent } from "../sub-courses/indian-entrance-prep-details/indian-entrance-prep-details.component";
import { IndianEntrancePrepComponent } from "../sub-courses/indian-entrance-prep/indian-entrance-prep.component";
import { IvyLeagueCourseComponent } from "../sub-courses/ivy-league-course/ivy-league-course.component";
import { MedicalProgramComponent } from "../sub-courses/medical-program/medical-program.component";
import { AbroadPhdProgramComponent } from "../sub-courses/post-graduate/abroad-phd-program/abroad-phd-program.component";
import { SchoolServicesDetailsComponent } from "../sub-courses/school-services-details/school-services-details.component";
import { SchoolServicesComponent } from "../sub-courses/school-services/school-services.component";
import { TopMedicalCountriesComponent } from "../sub-courses/top-medical-countries/top-medical-countries.component";
import { AbroadMastersPlacementComponent } from "../sub-courses/under-graduate/abroad-masters-placement/abroad-masters-placement.component";
import { AbroadTransferProgramComponent } from "../sub-courses/under-graduate/abroad-transfer-program/abroad-transfer-program.component";

export const courseGridRoutes: Routes = [
    {
      path:"",
      component:CourseGridComponent,
    },
    {
      path:"",
      children:[
        {
          path:"course-details/:menuId/:name/:id/:name",
          component:CourseDetailsComponent,
        },
        {
          path:"apCourses/:menuId/:name/:id/:name",
          component:ApCoursesComponent,
        },
        {
          path:"ap-course-details/:apCourseID",
          component:ApCourseDetailsComponent,
        },
        {
          path:"Ivy-League-course-details/:menuId/:name/:id/:name",
          component:IvyLeagueCourseComponent,
        },
        {
          path:"medical-program/:menuId/:name/:id/:name",
          component:MedicalProgramComponent
        },
        {
          path:"top-medical-countries/:countrieID",
          component:TopMedicalCountriesComponent,
        },
        {
          path:"indian-entrance-prep/:menuId/:name/:id/:name",
          component:IndianEntrancePrepComponent,
        },
        {
          path:"indian-entrance-prep-details/:entranceID",
          component:IndianEntrancePrepDetailsComponent,
        },
        {
          path:"after-school-services/:menuId/:name/:id/:name",
          component:SchoolServicesComponent,
        },
        {
          path:'after-school-services-details/:serviceID',
          component:SchoolServicesDetailsComponent,
        },
        {
          path:'career-navigation-details/:menuId/:name/:id/:name',
          component:CareerNavigationDetailsComponent,
        },
        {
          path:'abroad-transfer-program/:menuId/:name/:id/:name',
          component:AbroadTransferProgramComponent,
        },
        {
          path:'abroad-masters-placement/:menuId/:name/:id/:name',
          component:AbroadMastersPlacementComponent,
        },
        {
          path:'abroad-p.hd-program/:menuId/:name/:id/:name',
          component:AbroadPhdProgramComponent,
        },
      ],
    },
  ];