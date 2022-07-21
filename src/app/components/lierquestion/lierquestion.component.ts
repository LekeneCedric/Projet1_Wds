import { Component, OnInit } from '@angular/core';
import { HabitationsService } from 'src/app/services/habitations.service';
import { QuestionsService } from 'src/app/services/questions.service';
import habitation from 'src/app/models/habitation.models';
@Component({
  selector: 'app-lierquestion',
  templateUrl: './lierquestion.component.html',
  styleUrls: ['./lierquestion.component.scss']
})
export class LierquestionComponent implements OnInit {
  
  constructor(private habitationsService:HabitationsService,
              private questionsService:QuestionsService) { }
  habitations_list:habitation[]=[];
  //Contiendra la liste des habitations
  questions_list:any[]=[];
  

  async ngOnInit(){
  this.habitationsService.getAllHabitations().subscribe(
    data=>{this.habitations_list = data;}
  ).closed = true;
  this.questionsService.getAllQuestions().subscribe(
    data =>{this.questions_list = data;}
  ).closed = true;
  }

}
