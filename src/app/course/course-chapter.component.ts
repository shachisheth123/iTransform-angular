import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';
import { CourseChapter } from './course';

@Component({
    templateUrl: './course-module.component.html',
    styleUrls: ['./course.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class CourseChapterComponent implements OnInit {
    // course: Courses;
    // courses: Courses[];
    chapterName: CourseChapter;
    chapterNames: CourseChapter[];
    constructor(private courseService: CourseService, private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.chapterName = new CourseChapter();
        // this.course = new Courses();
        this.courseService.findByName().subscribe((data) => {
           
            this.chapterNames = data;
            
            console.log(data);
            //console.log(data[0].courseChapter[0]);
        });
    }
}