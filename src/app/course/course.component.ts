import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Courses } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: Courses[];
    course: Courses;
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.course = new Courses();

        this.courseService.findAll().subscribe((data) => {
            this.courses = data;
            console.log(data);
        });
    }
 }
