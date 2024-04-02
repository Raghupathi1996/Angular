import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

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
}

