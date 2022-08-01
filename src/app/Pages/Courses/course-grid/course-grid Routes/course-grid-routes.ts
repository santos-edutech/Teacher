import { Routes } from "@angular/router";
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { CourseGridComponent } from "../course-grid/course-grid.component";

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
      ],
    },
  ];