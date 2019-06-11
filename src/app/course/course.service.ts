import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Courses, CourseChapter } from './course';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class CourseService {
    baseUrl = '/assets/jsondata/course-list.json';
    baseUrl1 = '/assets/jsondata/course-chapter.json';
    constructor(private http: HttpClient) { }
    findAll(): Observable<Courses[]> {
        return this.http.get<Courses[]>(this.baseUrl);
    }
    findByName(): Observable<CourseChapter[]> {
        return this.http.get<CourseChapter[]>(this.baseUrl1);
    }

    findAllModule(): Observable<CourseChapter> {
        return this.http.get<CourseChapter>(this.baseUrl1);
    }
    findModuleByName(): Observable<CourseChapter> {
        return this.http.get<CourseChapter>(this.baseUrl1);
    }
}

