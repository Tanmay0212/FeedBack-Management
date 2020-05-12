import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './models/login.model';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ListFacultyComponent } from './list-faculty/list-faculty.component';
import { BarRatingModule } from "ngx-bar-rating";
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddTrainingprogramComponent } from './add-trainingprogram/add-trainingprogram.component';
import { ListTrainingProgramComponent } from './list-training-program/list-training-program.component';
import { ListFeedbackFacultyComponent } from './list-feedback-faculty/list-feedback-faculty.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ParticipantComponent } from './participant/participant.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';

const routes : Routes = [
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'add-course', component:AddCourseComponent},
  {path:'list-course', component:ListCourseComponent},
  {path:'add-faculty', component:AddFacultyComponent},
  {path:'list-faculty', component:ListFacultyComponent},
  {path:'coordinator', component:CoordinatorComponent},
  {path:'add-feedback/:tId/:fId', component:AddFeedbackComponent},
  {path:'add-training',component:AddTrainingprogramComponent},
  {path:'list-training',component:ListTrainingProgramComponent},
  {path:'list-participant', component:ListParticipantComponent},
  {path:'list-feedback-faculty/:id', component: ListFeedbackFacultyComponent},
  {path:'add-participant' , component:AddParticipantComponent},
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'*', redirectTo:'home', pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CoordinatorComponent,
    HomeComponent,
    AddCourseComponent,
    ListCourseComponent,
    AddFacultyComponent,
    ListFacultyComponent,
    AddFeedbackComponent,
    AddTrainingprogramComponent,
    ListTrainingProgramComponent,
    ListFeedbackFacultyComponent,
    AddEmployeeComponent,
    ParticipantComponent,
    ListParticipantComponent,
    AddParticipantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
