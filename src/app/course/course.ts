export class ChapterModule {
    ModuleName: string;
}

export class CourseChapter {
    chapterName: string;
    chapterModule: ChapterModule[];
}

export class CourseDetails {
    title: string;
    description: string;
}


export class Courses {
    courseName: string;
    courseChapter: CourseChapter[];
    courseDetails: CourseDetails[];
}
