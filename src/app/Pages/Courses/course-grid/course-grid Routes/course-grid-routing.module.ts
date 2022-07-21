import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { courseGridRoutes} from './course-grid-routes';


@NgModule({
  imports: [RouterModule.forChild(courseGridRoutes)],
  exports: [RouterModule]
})
export class CourseGridRoutingModule { }
