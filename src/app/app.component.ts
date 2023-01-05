import { COURSES } from './../db-data';
import { Component } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  course = COURSES;



  //below function get triggerd whenever the clickk event gets clicked
  // then the fuction prints the following log in console.
  onCourseSelected(course:Course){
    console.log(" App component - click event bubbled..", course)
  }
}
