import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login.component';
import { QuizComponent } from './quiz/quiz.component';


export const appRoute: Routes = [
{path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path:'quiz' , component:QuizComponent}
    
];
