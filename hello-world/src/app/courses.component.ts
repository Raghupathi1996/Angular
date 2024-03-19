import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <input (keyup) = "onKeyUp($event)" />
  `,
})
export class CoursesComponent {
  // title = "List of Course";
  // courses;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
  // colspan = 2;
  // isActive = true;

  onDivClick(){
    console.log("Function Div being invoked")
  }
  onClick($event: any){
    console.log("button clicked", $event)
  }

  onKeyUp($event: { keyCode: number; }){
    if($event.keyCode === 13){
      console.log("Enter key was pressed")
    }
  }
}
