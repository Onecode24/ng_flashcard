import { Component } from '@angular/core';
import { IFlash } from './flash.model'

function getRandomNumber(){
  return Math.floor(Math.random()*1000);
}

// @component est suivi ensuite de export class App component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  flashs: IFlash[]=[{
    question: "Question 1",
    answer: "Answer 1",
    show : false,
    id: getRandomNumber(),
  },
  {
    question: "Question 2",
    answer: "Answer 2",
    show : false,
    id: getRandomNumber(),
  },
  {
    question: "Question 3",
    answer: "Answer 3",
    show : false,
    id: getRandomNumber(),
  },{
    question: "Question 4",
    answer: "Answer 4",
    show : false,
    id: getRandomNumber(),
  },{
    question: "Question 5",
    answer: "Answer 5",
    show : false,
    id: getRandomNumber(),
  }]

  trackByFlashId(index: any, flash: IFlash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
   const flash = this.flashs.find(flash => flash.id === id);
   console.log(flash?.show);

  }
}