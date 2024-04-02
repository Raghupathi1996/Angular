import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // add inputs in the component for handling the property outside the component
  // inputs: ['isFavourite']
})
export class FavouriteComponent implements OnInit{
  @Input('isFavourite') isSelected: boolean | undefined;
  @Output('change') click = new EventEmitter();
  faStarRegular = faStarRegular
  faStarSolid = faStarSolid;
  currentIcon:any;
  constructor() {
    console.log('this.isFavourite in constructor', this.isSelected)
    // this.currentIcon = this.isFavourite ? this.faStarSolid : this.faStarRegular;
    // console.log('this.currentIcon', this.currentIcon)
  }

  ngOnInit(): void {
    // Initialize currentIcon based on the value of isFavourite
    console.log('this.isFavourite in ngOnInit', this.isSelected)
    this.currentIcon = this.isSelected ? this.faStarSolid : this.faStarRegular;
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.currentIcon = this.isSelected ? this.faStarSolid : this.faStarRegular;
    this.click.emit({newvalue: this.isSelected})
  }
}

export interface FavouriteChangedEventArgs{
  newValue: boolean
}
