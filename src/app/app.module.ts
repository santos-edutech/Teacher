import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './Routes/app-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { CourseGridModule } from './Pages/Courses/course-grid/course-grid.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { InsideHeaderComponent } from './header/inside-header/inside-header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './Pages/More/testimonials/testimonials.component';
import { ContactUsComponent } from './Pages/More/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/More/about-us/about-us.component';
import { ParikshaComponent } from './Pages/Products/pariksha/pariksha.component';
import { LearningCentreComponent } from './Pages/More/learning-centre/learning-centre.component';
import { LearningPartnerComponent } from './Pages/More/learning-partner/learning-partner.component';
import { FaqComponent } from './Pages/More/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InsideHeaderComponent,
    FooterComponent,
    AboutUsComponent,
    TestimonialsComponent,
    ContactUsComponent,
    ParikshaComponent,
    LearningCentreComponent,
    LearningPartnerComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseGridModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
