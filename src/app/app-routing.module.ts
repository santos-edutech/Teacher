import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentModulesComponent } from './dashboard/assessment-modules/assessment-modules.component';
import { CreateAssessmentModuleComponent } from './dashboard/assessment-modules/create-assessment-module/create-assessment-module.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { AssessmentNameComponent } from './dashboard/setting/assessment-name/assessment-name.component';
import { ManageCirriculumComponent } from './dashboard/setting/manage-cirriculum/manage-cirriculum.component';
import { ManageGradesComponent } from './dashboard/setting/manage-grades/manage-grades.component';
import { ManageSegementComponent } from './dashboard/setting/manage-segement/manage-segement.component';
import { ManageSubjectComponent } from './dashboard/setting/manage-subject/manage-subject.component';
import { ManageTopicsComponent } from './dashboard/setting/manage-topics/manage-topics.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { CandidateReportComponent } from './dashboard/test-report/candidate-report/candidate-report.component';
import { TestFeedbackComponent } from './dashboard/test-report/test-feedback/test-feedback.component';
import { TestReportComponent } from './dashboard/test-report/test-report/test-report.component';
import { StudentsComponent } from './dashboard/user-management/students/students.component';
import { TeachersComponent } from './dashboard/user-management/teachers/teachers.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },

  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
       component:DashboardComponent,
      },
      {
        path:'payment',
        component:PaymentComponent,
      },
      {
        path:'notification',
        component:NotificationComponent,
      },
      {
        path:'test-report',
        component:TestReportComponent,
      },
      {
        path:'candidate-report',
        component:CandidateReportComponent,
      },
      {
        path:'test-feedback',
        component:TestFeedbackComponent,
      },
      {
        path:'assessment-modules',
        component:AssessmentModulesComponent,
        children:[
          
        ]
      },
      {
        path:'setting',
        component:SettingComponent,
        children:[
          {
            path:'manage-segement',
            component:ManageSegementComponent,
          },
          {
            path:'manage-grades',
            component:ManageGradesComponent,
          },
          {
            path:'manage-curriculum',
            component:ManageCirriculumComponent,
          },
          {
            path:'manage-subject',
            component:ManageSubjectComponent,
          },
          {
            path:'manage-topics',
            component:ManageTopicsComponent,
          },
          {
            path:'accessment-name',
            component:AssessmentNameComponent,
          }
        ]
      },
      {
        path:'teachers',
        component:TeachersComponent,
      },
      {
        path:'students',
        component:StudentsComponent, 
      },
      {
        path:'create-assessment-module',
        component:CreateAssessmentModuleComponent ,
      },
      // {
      //   path:'user-management',
      //   component:UserManagementComponent,
      //   children:[
      //     {
      //       path:'teachers',
      //       component:TeachersComponent,
      //     },
      //     {
      //       path:'students',
      //       component:StudentsComponent,
      //     }
      //   ]
      // },
     
      
    ]
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
