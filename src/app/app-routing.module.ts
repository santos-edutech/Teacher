import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTestComponent } from './dashboard/assign-test/assign-test.component';
import { CreateAssignedTestComponent } from './dashboard/create-assigned-test/create-assigned-test.component';
import { CreateMockTestComponent } from './dashboard/create-mock-test/create-mock-test.component';
import { CreateQuestionComponent } from './dashboard/create-question/create-question.component';
import { CreateStudentComponent } from './dashboard/create-student/create-student.component';
import { CreateSubjectTestComponent } from './dashboard/create-subject-test/create-subject-test.component';
import { CreateTestComponent } from './dashboard/create-test/create-test.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EditMockQuestionsComponent } from './dashboard/edit-mock-questions/edit-mock-questions.component';
import { EditQuestionDetailsComponent } from './dashboard/edit-question-details/edit-question-details.component';
import { MockTestComponent } from './dashboard/mock-test/mock-test.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { SubjectTestComponent } from './dashboard/subject-test/subject-test.component';
import { TopicWiseTestComponent } from './dashboard/topic-wise-test/topic-wise-test.component';
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
      {path:'dashboard',component:DashboardComponent},
      {path:'assign-tests',component:AssignTestComponent},
      {path:'mock-test',component:MockTestComponent},
      {path:'topic-wise-test',component:TopicWiseTestComponent},
      {path:'questions',component:QuestionComponent},
      {path:'subject-test',component:SubjectTestComponent},
      {path:'students',component:StudentsComponent},
      {path:'create-test',component:CreateTestComponent},
      {path:'create-mock-test',component:CreateMockTestComponent},
      {path:'create-subject-test',component:CreateSubjectTestComponent},
      {path:'create-assigned-test',component:CreateAssignedTestComponent},
      {path:'create-question',component:CreateQuestionComponent},
      {path:'create-student',component:CreateStudentComponent},
      {path:'edit-mock-questions',component:EditMockQuestionsComponent},
      {path:'edit-question-details', component:EditQuestionDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
