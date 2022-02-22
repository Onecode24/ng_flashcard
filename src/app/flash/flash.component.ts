import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import {IFlash } from '../flash.model'

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
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
  //On defini un ecouter d'action sur les mots
  @Output() onDelete=new EventEmitter();
  @Output() onEdit=new EventEmitter();
  @Output() onCorrect=new EventEmitter();
  @Output() onIncorrect=new EventEmitter();
  /*On utiliser chaque mot pour l'appel de la fonction
  correspondante*/
  deleteFlash(){
    this.onDelete.emit(this.flash.id);
  }
  editFlash(){
    this.onEdit.emit(this.flash.id);
  }
  markCorrect(){
    this.onCorrect.emit(this.flash.id);
  }

  markIncorrect() {
    this.onIncorrect.emit(this.flash.id);
    }

}
