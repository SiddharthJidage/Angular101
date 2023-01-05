
import {  Course } from './../model/course';

import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {



   @Input()
   course:Course;
  @Input()
   cardIndex : number;

   isImageVisible(){
   return this.course.iconUrl && this.course
   }


  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor(){

  }
  ngOnInit()  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onCourseViewed(){
    console.log("card comp button clicked.");

    this.courseSelected.emit(this.course);
  }

  beginnerCardcolor(){
    if(this.course.category =="BEGINNER" ){
      return 'beginner';
  }



  }

}
