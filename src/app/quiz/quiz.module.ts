import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {  QuizRoute } from './quiz.route';

@NgModule({

    declarations : [
        QuizComponent
    ],
    imports : [
        BrowserModule,
        RouterModule.forChild(QuizRoute)
    ],
    exports: [
        QuizComponent
    ]
})
export class QuizModule{


}