import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  categoryMethods = [
    {id:1, name:"Development"},
    {id:2, name:"Art"},
    {id:3, name:"Language"}
  ]
categoryMethod: any;
  log(x: NgModel){
    console.log(x)
  }
  submit(f: NgForm){
    console.log(f)
  }
}
