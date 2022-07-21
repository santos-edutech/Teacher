import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridComponent } from './course-grid/course-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';
import { CourseGridRoutingModule } from './course-grid Routes/course-grid-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    CourseGridComponent,
    TestComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseGridRoutingModule,
  ]
})
export class CourseGridModule { }
