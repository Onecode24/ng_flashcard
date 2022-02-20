import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import {IFlash } from '../flash.model'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() flash: IFlash={

    id : 1,
    question: "React to Angular",
    answer: "No reaction :)",
    show: false,
  }

  @Output() onToggleCard = new EventEmitter();
  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }

}
