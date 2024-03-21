import { Component } from '@angular/core';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  isFavourite: boolean = true;
  faStarRegular = faStarRegular
  faStarSolid = faStarSolid;
  currentIcon = this.faStarRegular;
  constructor() {}

  onClick() {
    this.currentIcon = this.isFavourite ? this.faStarSolid : this.faStarRegular;
    this.isFavourite = !this.isFavourite;
  }
}
