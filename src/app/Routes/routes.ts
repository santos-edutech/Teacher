import { Routes } from "@angular/router";
import { ShopProductDetailComponent } from "../Pages/Buy-Courses/shop-product-detail/shop-product-detail.component";
import { ShopComponent } from "../Pages/Buy-Courses/shop/shop.component";
import { CollegesComponent } from "../Pages/Consulting/colleges/colleges.component";
import { ITComponent } from "../Pages/Consulting/it/it.component";
import { SchoolsComponent } from "../Pages/Consulting/schools/schools.component";
import { StemLabsComponent } from "../Pages/Consulting/stem-labs/stem-labs.component";
import { TestComponent } from "../Pages/Courses/course-grid/test/test.component";
import { HomeComponent } from "../Pages/home/home.component";
import { AboutUsComponent } from "../Pages/More/about-us/about-us.component";
import { ContactUsComponent } from "../Pages/More/contact-us/contact-us.component";
import { FaqComponent } from "../Pages/More/faq/faq.component";
import { LearningCentreComponent } from "../Pages/More/learning-centre/learning-centre.component";
import { LearningPartnerComponent } from "../Pages/More/learning-partner/learning-partner.component";
import { TestimonialsComponent } from "../Pages/More/testimonials/testimonials.component";
import { ParikshaComponent } from "../Pages/Products/pariksha/pariksha.component";

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path:"course-grid/:menuId/:name",
        loadChildren:()=>import('src/app/Pages/Courses/course-grid/course-grid.module').then(m=>m.CourseGridModule),
    },
    {
        path:"about-us",
        component:AboutUsComponent,
    },
    {
        path:"testimonials",
        component:TestimonialsComponent,
    },
    {
        path:"contact-us",
        component:ContactUsComponent,
    },
    {
        path:"pariksha",
        component:ParikshaComponent,
    },
    {
        path:"learning-centre",
        component:LearningCentreComponent,
    },
    {
        path:"learning-partner",
        component:LearningPartnerComponent,
    },
    {
        path:"faqs",
        component:FaqComponent,
    },
    {
        path:"schools",
        component:SchoolsComponent,
    },
    {
        path:"colleges",
        component:CollegesComponent,
    },
    {
        path:"shop",
        component:ShopComponent,
    },
    {
        path:"shop-product-detail",
        component:ShopProductDetailComponent,
    },
    {
        path:"information-technology",
        component:ITComponent,
    },
    {
        path:"STEM-Labs",
        component:StemLabsComponent,
    },
    {
        path:'test',
        component:TestComponent,
    },
];
