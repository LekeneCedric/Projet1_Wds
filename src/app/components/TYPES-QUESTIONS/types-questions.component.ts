import { Component, OnInit } from '@angular/core';
import ITypequestion from 'src/app/models/typequestion.models';
import { TypeQuestionsService } from 'src/app/services/type-questions.service';

@Component({
  selector: 'app-types-questions',
  templateUrl: './types-questions.component.html',
  styleUrls: ['./types-questions.component.scss']
})
export class TypesQuestionsComponent implements OnInit {

  constructor(private service : TypeQuestionsService) { }
  //Renvoie a l'intitule entre par l'utilisateur lors de la modification d'un type de question
  update_intitule?:string;
  update_label?:string;
  /*renvoie ici au type de question selectionne */ 
  current_typeq?:ITypequestion;
  //Renvoie au la liste des types de question recuperes
  typeqs_list:ITypequestion[] = [];
  //stocke l'intitule du type de question que veux creer/ajouter l'admin 
  intitule_new_typeq:string="";
    //stocke le label du type de question que veux creer/ajouter l'admin 
  label_new_typeq:string="";
  /*(search) contient l'element texte temporaiement saisi dans la barre de recherche 
  qu'on utilise ainsi pour filtrer notre tableau de type de question */
  serch:string = "";

  async ngOnInit(){
    await this.service.getAllQuestionsType().subscribe(
      data=>{
        this.typeqs_list = data;
      }
    )
  }
  
  setCurrentTypeQ(typeq:ITypequestion){
    this.current_typeq = typeq;
  }
  deleteTypeQuestion(id:number){
    this.service.deleteQuestionType(id).subscribe(data=>
      {
      console.log(data);
      }
      )
  }
  addTypeQuestion(){
    const typeq :ITypequestion = {
      intitule: this.intitule_new_typeq,
      label: this.label_new_typeq,
      created_at: new Date(),
      updated_at: new Date()
    }
    this.service.postQuestionType(typeq).subscribe(data=>
      {
    console.log(data);  
      }
      )}

  updateTypeQuestion(){
    const updateTypeq :ITypequestion = {
      id:this.current_typeq?.id,
      intitule:String(this.current_typeq?.intitule),
      label:String(this.current_typeq?.label),
      updated_at:new Date()  
    }
    this.service.updateQuestionType(updateTypeq).subscribe(
      data =>{
        console.log(data);
      }
    )
  }    

  
  }
