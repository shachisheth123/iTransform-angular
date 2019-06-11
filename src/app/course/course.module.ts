import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CourseRoute } from './course.route';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CourseChapterComponent } from './course-chapter.component';
import { ChapterModuleComponent } from './chapter-module.component';



@NgModule({
    declarations: [
        CourseComponent,
        CourseChapterComponent,
        ChapterModuleComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(CourseRoute)
    ],
    exports: [
        CourseComponent
    ],
    providers: [
        CourseService
    ]
})
export class CourseModule {
}
