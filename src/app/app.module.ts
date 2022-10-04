import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { ManageGradesComponent } from './dashboard/setting/manage-grades/manage-grades.component';
import { ManageCirriculumComponent } from './dashboard/setting/manage-cirriculum/manage-cirriculum.component';
import { ManageSubjectComponent } from './dashboard/setting/manage-subject/manage-subject.component';
import { ManageTopicsComponent } from './dashboard/setting/manage-topics/manage-topics.component';
import { AssessmentNameComponent } from './dashboard/setting/assessment-name/assessment-name.component';
import { ManageSegementComponent } from './dashboard/setting/manage-segement/manage-segement.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { TeachersComponent } from './dashboard/user-management/teachers/teachers.component';
import { StudentsComponent } from './dashboard/user-management/students/students.component';
import { SublevelMenuComponent } from './sidebar/sublevel-menu/sublevel-menu.component';
import { TestReportComponent } from './dashboard/test-report/test-report/test-report.component';
import { CandidateReportComponent } from './dashboard/test-report/candidate-report/candidate-report.component';
import { TestFeedbackComponent } from './dashboard/test-report/test-feedback/test-feedback.component';
import { AssessmentModulesComponent } from './dashboard/assessment-modules/assessment-modules.component';
import { CreateAssessmentModuleComponent } from './dashboard/assessment-modules/create-assessment-module/create-assessment-module.component';
import {MatTreeModule} from '@angular/material/tree';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    NotificationComponent,
    SettingComponent,
    ManageGradesComponent,
    ManageCirriculumComponent,
    ManageSubjectComponent,
    ManageTopicsComponent,
    AssessmentNameComponent,
    ManageSegementComponent,
    UserManagementComponent,
    TeachersComponent,
    StudentsComponent,
    SublevelMenuComponent,
    TestReportComponent,
    CandidateReportComponent,
    TestFeedbackComponent,
    AssessmentModulesComponent,
    CreateAssessmentModuleComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTreeModule,
    TreeViewModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
