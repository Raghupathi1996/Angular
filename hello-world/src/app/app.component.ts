import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import 'bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'hello-world';

  // input and output properties declared, so it can be used outside its own component.
  // first approach
  post = {
    title:"Title",
    isFavourite: true
  };
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs){
    console.log('favourite component changed to', eventArgs)
  }

  tweet = {
    body:'This is the body of the tweet',
    isLiked:true,
    likesCount:10
  }

// Derivatives
// ng_if_else
  // courses = [1]

  // ngSwitch Case
  viewMode = 'Map'

  //ngForOf
  courses: { name: string; id: number; }[] | undefined;
  addCourse(){
    if(!this.courses){
      this.courses = []
    }
    this.courses.push({name: "Next Course", id:4})
  }
  deleteCourse(course: {name: string, id: number}){
    if(!this.courses){
      this.courses = []
    }
    let index = this.courses.indexOf(course)
    if(index>-1) this.courses.splice(index, 1)
  }

  loadCourse(){
    this.courses = [
      {name: "Angular Course", id:1},
      {name: "React Course", id:2},
      {name: "Vue Course", id:3}
    ]
  }

  trackCourses(_index: any, course: { name: string, id: number }){
    return course? course.id : undefined
  }

  // ngClass and ngStyle
  canSave = true;

  task = {
    title:'The Angualar Course',
    assignee:{
      name:'Raghupathi'
    }
  }
}

