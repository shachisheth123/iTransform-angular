import { Component, OnInit } from '@angular/core';
import { CourseChapter, ChapterModule } from './course';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl :'./course-module.component.html',
    styleUrls: ['./course.component.css']
})
export class ChapterModuleComponent implements OnInit {

    chapterName: CourseChapter;
    chapterNames: CourseChapter[];

    chapterModule: ChapterModule;
    chapterModules: ChapterModule[];
    constructor(private courseService: CourseService, private route: ActivatedRoute ) {}

    ngOnInit(): void {


        this.chapterName = new CourseChapter();
        this.chapterModule = new ChapterModule();

        this.courseService.findAllModule().subscribe((data) => {
          this.chapterName = data;
          this.chapterModules = this.chapterName[0].chaptermodule;
          console.log(data);
          console.log(this.chapterModule);
          console.log(this.chapterName[0].chaptermodule);
        });
    }
}