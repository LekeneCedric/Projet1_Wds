import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import PageTypeQuestion from 'src/app/models/modelsPages/pageTypeQuestions.models';
import ITypequestion from 'src/app/models/typequestion.models';
import { TypeQuestionsService } from 'src/app/services/type-questions.service';

@Component({
  selector: 'app-types-questions',
  templateUrl: './types-questions.component.html',
  styleUrls: ['./types-questions.component.scss']
})
export class TypesQuestionsComponent implements OnInit {

  constructor(private service : TypeQuestionsService) { }

  currentPage:number = 0;
  pageSize:number = 6;
  totalPages:number = 0;
  selected:number = 10;
  getPage(page:number,size:number):Observable<PageTypeQuestion>{
  
    let index = page * size;
    let totalPages = ~~(this.typeqs_list.length/size);
    if(this.typeqs_list.length % size != 0)
      totalPages ++;
    let pageEquipements = this.typeqs_list.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      questions:pageEquipements
    })
  }

  onGetPageTypeQuestions(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.typeqs_list = data.questions;
        this.totalPages = data.totalPages;


      }
    )
  }

 
  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.typeqs_list.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.typeqs_list.length;
    }
    this.getListTypeQuestions();
	}

  async getListTypeQuestions(){
    await this.service.getAllQuestionsType().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.typeqs_list = data.reverse();
      this.onGetPageTypeQuestions();
    })
  }
  
  gotoPage(i:number){
    this.currentPage = i;
    this.getListTypeQuestions();

  }
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
  search:string = "";

  async ngOnInit(){
    await this.service.getAllQuestionsType().subscribe(
      data=>{
        this.typeqs_list = data.reverse();
        this.onGetPageTypeQuestions();
      }
    )
  }
  
  setCurrentTypeQ(typeq:ITypequestion){
    this.update_intitule = typeq.intitule;
    this.update_label = typeq.label;
    this.current_typeq = typeq;
  }
  
  deleteTypeQuestion(id:any){
    this.service.deleteQuestionType(Number(id)).subscribe(data=>
      {
      console.log(data);
      this.ngOnInit();
      }
      )
  }
  addTypeQuestion(){
    const typeq :ITypequestion = {
      intitule:this.intitule_new_typeq.toString(),
      label: String(this.label_new_typeq),
      created_at: new Date(),
      updated_at: new Date()
    }
    this.service.postQuestionType(typeq).subscribe(data=>
      {
     this.intitule_new_typeq = "";
     this.label_new_typeq = "";
    console.log(data);  
    this.ngOnInit();
      }
      )}

  updateTypeQuestion(){
    const updateTypeq :ITypequestion = {
      id:Number(this.current_typeq?.id),
      intitule:this.update_intitule!.toString(),
      label:this.update_label!,
      updated_at:new Date()  
    }
    this.service.updateQuestionType(updateTypeq).subscribe(
      data =>{
        console.log(data);
        console.log(updateTypeq);
        this.ngOnInit();
      }
    )
  }    

  
  }
