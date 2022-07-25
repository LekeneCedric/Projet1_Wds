import { Component, OnInit } from '@angular/core';
import IQuestion from 'src/app/models/question.models';
import ITypequestion from 'src/app/models/typequestion.models';
import { QuestionsService } from 'src/app/services/questions.service';
import { TypeQuestionsService } from 'src/app/services/type-questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QUESTIONSComponent implements OnInit {

  constructor(private service:QuestionsService,private qtype:TypeQuestionsService) { }
   //Renvoie a l'intitule entre par l'utilisateur lors de la modification d'un type de question
   update_intitule?:string;
   update_type?:string;
   update_idtype?:number;
   update_ordre?:number;
   update_obligatoire?:boolean;
   /*renvoie ici au type de question selectionne */ 
   current_question?:IQuestion;
   //Renvoie au la liste des types de question recuperes
   questions_list:any[] = [];
   //stocke l'intitule du type de question que veux creer/ajouter l'admin 
   intitule_new_question?:string;
   type_new_question?:string;
   idtype_new_question?:number;
   ordre_new_question?:number;
   obligatoire_new_question?:boolean;
   /*(search) contient l'element texte temporaiement saisi dans la barre de recherche 
   qu'on utilise ainsi pour filtrer notre tableau de type de question */
   search:string = "";
   questionType_list?:ITypequestion[];
 
 async ngOnInit(){
  await this.service.getAllQuestions().subscribe(
    data=>{
      this.questions_list = data;
      console.log(data);
    }
  )
  await this.qtype.getAllQuestionsType().subscribe(data=> {
    this.questionType_list = data;
  });
  }
  getLabelTypeAssocie(id:number):string{
   let type:string = "";
    this.qtype.getQuestionType(id).subscribe(
      data => {
        type = data.label;
      }
    )
   return type;
  }
  setCurrentQuestion(question:IQuestion){
    this.current_question = question;
  }
  deleteQuestion(id:any){
    this.service.deleteQuestion(Number(id)).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  addQuestion(){
    const question :IQuestion = {
      idtype:this.idtype_new_question!,
      intitule:this.intitule_new_question!,
      ordre:this.ordre_new_question!,
      type:this.type_new_question!,
      obligatoire:this.obligatoire_new_question==true?1:0,
      created_at:new Date(),
      updated_at:new Date(),
    }
    this.service.postQuestion(question).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  updateQuestion(){
    const updateq:IQuestion = {
      id:Number(this.current_question?.id),
      idtype:this.update_idtype!,
      intitule:this.update_intitule!,
      ordre:this.update_ordre!,
      type:this.update_type!,
      obligatoire:this.update_obligatoire==true?1:0,
      updated_at:new Date()
    }
    console.log(updateq);
    this.service.updateQuestion(updateq).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }

}
