import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` <input [(ngModel)]="email" (keyup.enter)="onkeyUp()" /> `,
  // [value]='email' #enteredEmail (keyup.enter)="email = enteredEmail.value; onKeyUp()"
})
// @Component({
//   selector: 'courses',
// })
export class CoursesComponent {
  // title = "List of Course";
  // courses;

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }
  // colspan = 2;
  // isActive = true;
  email = 'dummy@gmail.com';
  onDivClick() {
    console.log('Function Div being invoked');
  }
  onClick($event: any) {
    console.log('button clicked', $event);
  }

  onkeyUp() {
    console.log('Enter key was pressed', this.email);
  }
}
