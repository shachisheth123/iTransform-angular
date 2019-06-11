import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService{

    constructor(private http:HttpClient){}

    findAll() : Observable<Quiz[]>{
        return this.http.get<Quiz[]>('assets/jsondata/quiz-questions.json');
    }


}