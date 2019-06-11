import { Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseChapterComponent } from './course-chapter.component';
import { ChapterModuleComponent } from './chapter-module.component';

export const CourseRoute: Routes = [
    { path: 'courses', component: CourseComponent },
    { path: 'courses/chapter-list', component: CourseChapterComponent },
    {path : 'courses/chapter-list/module-list/module-details' , component : ChapterModuleComponent }
];
