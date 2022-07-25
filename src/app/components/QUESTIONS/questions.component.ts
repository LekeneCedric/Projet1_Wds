import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import PageQuestion from 'src/app/models/modelsPages/pageQuestions.models';
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
  currentPage:number = 0;
  pageSize:number = 6;
  totalPages:number = 0;
  selected:number = 10;
  getPage(page:number,size:number):Observable<PageQuestion>{
  
    let index = page * size;
    let totalPages = ~~(this.questions_list.length/size);
    if(this.questions_list.length % size != 0)
      totalPages ++;
    let pageEquipements = this.questions_list.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      questions:pageEquipements
    })
  }

  onGetPageQuestions(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.questions_list = data.questions;
        this.totalPages = data.totalPages;


      }
    )
  }

 
  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.questions_list.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.questions_list.length;
    }
    this.getListQuestions();
	}

  async getListQuestions(){
    await this.service.getAllQuestions().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.questions_list = data.reverse();
      this.onGetPageQuestions();
    })
  }
  
  gotoPage(i:number){
    this.currentPage = i;
    this.getListQuestions();

  }
   //Renvoie a l'intitule entre par l'utilisateur lors de la modification d'un type de question
   update_intitule?:string;
   update_type?:string;
   update_idtype?:number;
   update_ordre?:number;
   update_obligatoire?:number;
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
      this.questions_list = data.reverse();
      this.onGetPageQuestions();
      console.log(data);
    }
  )
  await this.qtype.getAllQuestionsType().subscribe(data=> {
    this.questionType_list = data;
  });

  }
  getQuestionTypeLabel(id:number):string{
    let Label="";
   this.questionType_list!.forEach(question=>{
    question.id == id?Label=question.label:null;   
   })
   return Label
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
  getupdateObligatoire(updatevalue:any):number{
  if(updatevalue === true)
  {
    return 1;
  }
  else{
    return 0;
  }
  }
  setCurrentQuestion(question:IQuestion){
    this.update_intitule = question.intitule;
    this.update_idtype = question.idtype;
    this.update_type = question.type;
    this.update_ordre = question.ordre;
    this.update_obligatoire = question.obligatoire
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
      obligatoire:this.update_obligatoire!,
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
