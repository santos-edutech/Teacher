import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridComponent } from './course-grid/course-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponent } from './test/test.component';
import { CourseGridRoutingModule } from './course-grid Routes/course-grid-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


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
    FormsModule, 
    Ng2SearchPipeModule
  ]
})
export class CourseGridModule { }
