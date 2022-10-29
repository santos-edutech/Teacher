import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './Routes/app-routing.module';
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
import { SchoolsComponent } from './Pages/Consulting/schools/schools.component';
import { StemLabsComponent } from './Pages/Consulting/stem-labs/stem-labs.component';
import { ITComponent } from './Pages/Consulting/it/it.component';
import { CollegesComponent } from './Pages/Consulting/colleges/colleges.component';
import { ShopComponent } from './Pages/Buy-Courses/shop/shop.component';
import { ShopProductDetailComponent } from './Pages/Buy-Courses/shop-product-detail/shop-product-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternshipsComponent } from './Pages/Consulting/internships/internships.component';
import { BlogsComponent } from './Pages/More/blogs/blogs.component';
import { CareersNavigateComponent } from './Pages/careers-navigate/careers-navigate.component';
import { CoreEmergingSectorsComponent } from './Pages/core-emerging-sectors/core-emerging-sectors.component';
import { AngularFireModule } from '@angular/fire/compat';
import {  AngularFirestoreModule, } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { CartComponent } from './Pages/Buy-Courses/cart/cart.component';
import { CheckoutComponent } from './Pages/Buy-Courses/checkout/checkout.component';
import { AbroadEducationComponent } from './Pages/Category/abroad-education/abroad-education.component';
import { EducationIndiaComponent } from './Pages/Category/education-india/education-india.component';
import { AllCategoriesComponent } from './Pages/Category/all-categories/all-categories.component';
import { ThankyouComponent } from './Pages/Buy-Courses/thankyou/thankyou.component';
import { TermsAndConditionsComponent } from './Pages/footer-pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './Pages/footer-pages/privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './Pages/footer-pages/cancellation-policy/cancellation-policy.component';
import { HomeModule } from './Pages/Home/home.module';


@NgModule({
  declarations: [
    AppComponent,
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
    SchoolsComponent,
    StemLabsComponent,
    ITComponent,
    CollegesComponent,
    ShopComponent,
    ShopProductDetailComponent,
    InternshipsComponent,
    BlogsComponent,
    CareersNavigateComponent,
    CoreEmergingSectorsComponent,
    CartComponent,
    CheckoutComponent,
    AbroadEducationComponent,
    EducationIndiaComponent,
    AllCategoriesComponent,
    ThankyouComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    CancellationPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseGridModule,
    HomeModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
