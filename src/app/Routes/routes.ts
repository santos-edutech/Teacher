import { Routes } from "@angular/router";
import { InsideHeaderComponent } from "../header/inside-header/inside-header.component";
import { CourseDetailsComponent } from "../Pages/Courses/course-details/course-details.component";
import { CourseGridComponent } from "../Pages/Courses/course-grid/course-grid.component";
import { HomeComponent } from "../Pages/home/home.component";

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path:"course-grid/:menuId/:name",
        component:CourseGridComponent,
        children:[
            {
                path:"course-details",
                component:CourseDetailsComponent,
            },
        ]
    },
    {
        path:"header",
        component:InsideHeaderComponent,
    },
];
