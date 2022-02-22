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
   if(flash?.show==true){
     flash.show=false;
   }else if(flash?.show==false){
    flash.show=true;
   }
  /* editing =false;
   editingId: number;*/
  }
  handleDelete(id : number){
    for(let i=0; i<this.flashs.length; i++){
      if(this.flashs[i].id==id){
        const flashId = this.flashs[i];
        this.flashs.splice(flashId.id,1);
      }
    }

  }
  handleEdit(id : number){
    /* editing =true;
   editingId=id;*/

   // TODO: We will add editing logic after adding the form

  }
  handleRemenberedChange(id : number, flag : 'correct'|'incorrect'){
    const flash = this.flashs.find(flash => flash.id === id);
    if(flash?.show==true){
      flash.remembered = flag;
    }
  }
}
