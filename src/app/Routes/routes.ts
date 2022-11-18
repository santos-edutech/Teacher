import { Routes } from "@angular/router";
import { CartComponent } from "../Pages/Buy-Courses/cart/cart.component";
import { CheckoutComponent } from "../Pages/Buy-Courses/checkout/checkout.component";
import { ShopProductDetailComponent } from "../Pages/Buy-Courses/shop-product-detail/shop-product-detail.component";
import { ShopComponent } from "../Pages/Buy-Courses/shop/shop.component";
import { ThankyouComponent } from "../Pages/Buy-Courses/thankyou/thankyou.component";
import { CareersNavigateComponent } from "../Pages/careers-navigate/careers-navigate.component";
import { AbroadEducationComponent } from "../Pages/Category/abroad-education/abroad-education.component";
import { AllCategoriesComponent } from "../Pages/Category/all-categories/all-categories.component";
import { DetailsRegisterForTestComponent } from "../Pages/Category/details-register-for-test/details-register-for-test.component";
import { EducationIndiaComponent } from "../Pages/Category/education-india/education-india.component";
import { RegisterForTestComponent } from "../Pages/Category/register-for-test/register-for-test.component";
import { CollegesComponent } from "../Pages/Consulting/colleges/colleges.component";
import { InternshipsComponent } from "../Pages/Consulting/internships/internships.component";
import { ITComponent } from "../Pages/Consulting/it/it.component";
import { SchoolsComponent } from "../Pages/Consulting/schools/schools.component";
import { StemLabsComponent } from "../Pages/Consulting/stem-labs/stem-labs.component";
import { CoreEmergingSectorsComponent } from "../Pages/core-emerging-sectors/core-emerging-sectors.component";
import { CancellationPolicyComponent } from "../Pages/footer-pages/cancellation-policy/cancellation-policy.component";
import { PrivacyPolicyComponent } from "../Pages/footer-pages/privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "../Pages/footer-pages/terms-and-conditions/terms-and-conditions.component";
import { AboutUsComponent } from "../Pages/More/about-us/about-us.component";
import { BlogsComponent } from "../Pages/More/blogs/blogs.component";
import { ContactUsComponent } from "../Pages/More/contact-us/contact-us.component";
import { FaqComponent } from "../Pages/More/faq/faq.component";
import { LearningCentreComponent } from "../Pages/More/learning-centre/learning-centre.component";
import { LearningPartnerComponent } from "../Pages/More/learning-partner/learning-partner.component";
import { TestimonialsComponent } from "../Pages/More/testimonials/testimonials.component";
import { ParikshaComponent } from "../Pages/Products/pariksha/pariksha.component";

export const routes: Routes = [
    {
        path:"",
        loadChildren:()=>import('src/app/Pages/Home/home.module').then(m=>m.HomeModule),
    },
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
        path:"shop-product-detail/:menuId/:id",
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
        path:'internships',
        component:InternshipsComponent,
    },
    {
        path:'blogs',
        component:BlogsComponent
    },
    {
        path:'careers-navigate',
        component:CareersNavigateComponent,
    },
    {
        path:'core-emerging-sectors',
        component:CoreEmergingSectorsComponent,
    },
    {
        path:'cart',
        component:CartComponent,
    },
    {
        path:'checkout',
        component:CheckoutComponent,
    },
    {
        path:'abroad-education',
        component:AbroadEducationComponent,
    },
    {
        path:'indian-education',
        component:EducationIndiaComponent,
    },
    {
        path:'all-categories',
        component:AllCategoriesComponent,
    },
    {
        path:'thankyou',
        component:ThankyouComponent
    },
    {
        path:'terms-and-conditions',
        component:TermsAndConditionsComponent,
    },
    {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
    },
    {
        path:'cancellation-policy',
        component:CancellationPolicyComponent,
    },
    {
        path:'register-for-test',
        component:RegisterForTestComponent,
    },
    {
        path:'details-register-for-test',
        component:DetailsRegisterForTestComponent,
    }
];
