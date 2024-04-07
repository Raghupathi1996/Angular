import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent  implements OnInit{
  @Input("title") Title : string | undefined;
  @Input("isExpanded") isExpanded!: boolean;
  faChevronUp = faChevronUp
  faChevronDown = faChevronDown
  currentIcon:any
  
  constructor(){
  }

  ngOnInit(): void {
    this.currentIcon =  this.isExpanded? faChevronDown: faChevronUp;
  }

  toggle(){
    this.isExpanded = !this.isExpanded
    this.currentIcon = this.isExpanded? faChevronDown: faChevronUp;

  }
}
