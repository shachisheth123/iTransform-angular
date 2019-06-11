import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';
import { nextContext } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit{

    quizes : Quiz[];
    quiz:Quiz;
    totalAnswered: number = 0;
    rightAnswer: number;

    quizForm:FormGroup;

    constructor(private fb: FormBuilder,private quizService : QuizService , private router :Router){
        
    }
    ngOnInit(): void {
        this.quiz=new Quiz();
        this.quizService.findAll().subscribe((data) => {

                this.quizes=data;
                console.log(data);
                
        }); 
        this.quizForm = this.fb.group({

            question: ['', Validators.required]     
        }); 
    }

    
    submitTest(quiz:Quiz[]){

        alert('submitted')
        alert(this.quiz.question)
            for(let i=0;i<5;i++){

                let attempt=0;
                
                if ("selected" in this.quiz.question[i] && (this.quiz.question[i]["selected"] != null)) {
                    this.totalAnswered++;
                }       
                
                while(attempt<3)
                {
                if (this.quiz.question[i]["selected"] == this.quiz.question[i]["answer"] ) {
                    this.quiz.answer=this.rightAnswer;
                    this.rightAnswer++; 
                    attempt=3;
                }
                else{
                    attempt++;
                }
            } 
            }               
    }
    get questions() { return this.quizForm.controls.question; }

}