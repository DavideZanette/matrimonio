import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gift } from '../models/Gift';

@Component({
  selector: 'app-gift-element',
  templateUrl: './gift-element.component.html',
  styleUrls: ['./gift-element.component.css']
})
export class GiftElementComponent implements OnInit {

  @Input() gift: Gift;
  @Output() elementClicked:EventEmitter<boolean> = new EventEmitter();
  @Output() reaction:EventEmitter<boolean> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  elementClick(selectedGift:Gift){
    this.elementClicked.emit(true);
    this.reaction.emit(selectedGift.reaction);
  }
  

}
