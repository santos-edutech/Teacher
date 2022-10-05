import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MockTestComponent } from './dashboard/mock-test/mock-test.component';
import { SubjectTestComponent } from './dashboard/subject-test/subject-test.component';
import { TopicWiseTestComponent } from './dashboard/topic-wise-test/topic-wise-test.component';
import { AssignTestComponent } from './dashboard/assign-test/assign-test.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateTestComponent } from './dashboard/create-test/create-test.component';
import { CreateMockTestComponent } from './dashboard/create-mock-test/create-mock-test.component';
import { CreateSubjectTestComponent } from './dashboard/create-subject-test/create-subject-test.component';
import { CreateAssignedTestComponent } from './dashboard/create-assigned-test/create-assigned-test.component';
import { CreateStudentComponent } from './dashboard/create-student/create-student.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { EditMockQuestionsComponent } from './dashboard/edit-mock-questions/edit-mock-questions.component';
import { CreateQuestionComponent } from './dashboard/create-question/create-question.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MydialogComponent } from './dashboard/mydialog/mydialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditQuestionDetailsComponent } from './dashboard/edit-question-details/edit-question-details.component';
import { BulkuploadComponent } from './dashboard/bulkupload/bulkupload.component';
import { BulkuploadimageComponent } from './dashboard/bulkuploadimage/bulkuploadimage.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MockTestComponent,
    SubjectTestComponent,
    TopicWiseTestComponent,
    AssignTestComponent,
    QuestionComponent,
    StudentsComponent,
    CreateTestComponent,
    CreateMockTestComponent,
    CreateSubjectTestComponent,
    CreateAssignedTestComponent,
    CreateQuestionComponent,
    CreateStudentComponent,
    EditMockQuestionsComponent,
    MydialogComponent,
    EditQuestionDetailsComponent,
    BulkuploadComponent,
    BulkuploadimageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CKEditorModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
   
  ],
  entryComponents: [
    MydialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
