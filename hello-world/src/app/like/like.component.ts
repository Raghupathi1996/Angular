import { Component, OnInit, Input } from '@angular/core';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})

export class LikeComponent implements OnInit {
  @Input('isSelected') isLiked: boolean | undefined;
  @Input('Count') Count: number | undefined;
  currentIcon:any;
  faHeartRegular = faHeartRegular
  faHeartSolid = faHeartSolid

  constructor() { 
    
  }

  ngOnInit(): void {
    this.currentIcon = this.isLiked?this.faHeartSolid:this.faHeartRegular
  }

  toggleLike(): void {
    this.Count = this.Count ?? 0
    // this.currentIcon = this.isLiked?this.faHeartRegular:this.faHeartSolid
    // this.Count += this.isLiked ? -1 : 1;

    this.isLiked = !this.isLiked;
    this.Count += this.isLiked ? 1 : -1;
    this.currentIcon = this.isLiked?this.faHeartSolid:this.faHeartRegular
  }
}
