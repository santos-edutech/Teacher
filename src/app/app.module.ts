import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './Routes/app-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailsComponent } from './Pages/Courses/course-details/course-details.component';
import { CourseGridComponent } from './Pages/Courses/course-grid/course-grid.component';
import { InsideHeaderComponent } from './header/inside-header/inside-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CourseDetailsComponent,
    CourseGridComponent,
    InsideHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
