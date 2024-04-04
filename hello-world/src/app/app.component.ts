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
  courses = [
    {name: "Angular Course", id:1},
    {name: "React Course", id:2}
  ]
}

