
export class Option{

    option1:string;
    option2:string;
    option3:string;
    option4:string;
}

export class Question{
    question1:string;
    question2:string;
    question3:string;
    question4:string;
    question5:string;
}

export class Quiz{
    ID:number;
    question:Question[];
    option:Option[];
    answer:number;
    length: number;
}