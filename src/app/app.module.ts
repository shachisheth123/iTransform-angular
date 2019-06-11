import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseModule } from './course/course.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RegistrationModule,
    CourseModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
