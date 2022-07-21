import { Routes } from "@angular/router";
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { CourseGridComponent } from "../course-grid/course-grid.component";
import { TestComponent } from "../test/test.component";

export const courseGridRoutes: Routes = [
    {
      path:"",
      component:CourseGridComponent,
    },
    {
      path:"",
      children:[
        {
          path:"course-details/:id",
          component:CourseDetailsComponent,
        },
      ],
    },
  ];