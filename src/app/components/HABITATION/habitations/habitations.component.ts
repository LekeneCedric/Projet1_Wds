import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import IHabitation from 'src/app/models/habitation.models';
import PageHabitation from 'src/app/models/modelsPages/pageHabitations.models';
import { HabitationsService } from 'src/app/services/habitations.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-habitations',
  templateUrl: './habitations.component.html',
  styleUrls: ['./habitations.component.scss']
})
export class HabitationsComponent implements OnInit {

  constructor(private service:HabitationsService,private router:Router,private questionService:QuestionsService) {}
  QuestionEtat : string ='';
  QuestionAction:string = '';
  selectedQuestion: any []= [];
  linkedExploitationQuestions: any []= [];
  unlinkedExploitationQuestions: any[]= [];
  linkedContructionQuestions: any[]= [];
  unlinkedContructionQuestions: any[]= [];
  questionList : any[] = [];
  linkedAction : string ='';
  selectedLinked : any[]=[];
  currentPage: number = 0;
  pageSize: number = 6;
  totalPages: number = 0;

  update_intitule?: string;
  /*Current_habitation ici renvoie a l'habitation selectionnee
  a la quelle l'admin veux appliquer les modifications*/
  current_habitation?:IHabitation;
  /*habitations_list ici renvoie a un tableau contenant la liste de toutes les habitations*/
  habitations_list:IHabitation[]=[];
  definitive_list:IHabitation[] = [];
  /*lorsque l'admin voudra ajouter une nouvelle habitation , l'intitule de cette 
  derniere se stockera temporairement dans la variable (intitule_new_habitation)*/
  intitule_new_habitation:String ="";
  /* contient l'id de l'habitation qu'on veux lier*/ 
  id_link_habitation?:number;
  /*(search) contient l'element texte temporaiement saisi dans la barre de recherche 
  qu'on utilise ainsi pour filtrer notre tableau d'habitations */
  search:string = "";
  lier?:boolean;
  /*tableau contenant la liste des ID des habitations liees a l'habitation actuellement selectionne*/
  
  linked_current_habitations_id:number[]=[];
  linked_current_habitations:any[]=[];
  unlinked_current_habitations:any[]=[];
  /**/
  
  selected:number = 10;
  
  getPage(page:number,size:number):Observable<PageHabitation>{
  
    let index = page * size;
    let totalPages = ~~(this.habitations_list.length/size);
    if(this.habitations_list.length % size != 0)
      totalPages ++;
    let pageEquipements = this.habitations_list.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      habitations:pageEquipements
    })
  }

  onGetPageHabitation(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.habitations_list = data.habitations;
        this.totalPages = data.totalPages;


      }
    )
  }

 
  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.habitations_list.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.habitations_list.length;
    }
    this.getListHabitation();
	}

  async getListHabitation(){
    await this.service.getAllHabitations().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.habitations_list = data.reverse();
      this.onGetPageHabitation();
    })
  }
  gotoPage(i:number){
    this.currentPage = i;
    this.getListHabitation();

  }
  async ngOnInit(){
    /*A l'initialisation de notre composants , on recupere toutes les habitations*/
    await this.service.getAllHabitations().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.habitations_list = data.reverse();
      this.definitive_list = this.habitations_list;
      this.onGetPageHabitation();
    })

    await this.questionService.getAllQuestions().subscribe(
      
      data=>{
        console.log(data)
        data.forEach((question:any)=>{
          this.questionList.push({id:question.question.id,label:question.label});
        })
        console.log(this.questionList)
      }
    )
    

  }
  refresh(){
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
   /**/
   changelinkhabitation(event:any){
    this.id_link_habitation = event.target.value;
    this.lier = true ? this.linked_current_habitations_id.indexOf(Number(event.target.value)) ==-1 : this.lier=false;
  }
  /*Cette methode permet de recuperer l'habitation acutellement selectionner 
  afin d'y appliquer des modification*/
  setCurrentHabitation(habitation:IHabitation){
    this.update_intitule = habitation?.intitule;
    this.current_habitation = habitation;
  }
  /*Cette methode permet de supprimer une habitation*/
  deleteHabitation(id:any):void{
  this.service.deleteHabitation(Number(id)).subscribe(data=>{
   console.log("Habitation supprime avec success");
   this.ngOnInit();
  });
  }
  /*Cette methode permet d'ajouter une nouvelle habitation*/
  addHabitation():void{
    /*Nous creons temporairement une habitation a base des informations entrees par l'admin 
    afin de l'ajouter comme parametre dans notre fonction*/
    const new_habitation:IHabitation = {
      intitule:String(this.intitule_new_habitation.toString()),
      created_at:new Date(),
      updated_at:new Date()}

    
    this.service.addHabitation(new_habitation!).subscribe(data=>{
      this.intitule_new_habitation="";
      console.log(data);
      console.log("Habitation ajoute avec success");
      this.ngOnInit();
    })
    
  }
  /*Cette methode permet de modifier une habitation*/
  updateHabitation(){
    const updateHabitation:IHabitation = {
      id:this.current_habitation?.id,
      intitule:String(this.update_intitule?.toString()),
      /*A chaque modification de notre habitation , la date de modification change imperativement 
        mais par contre la date de modification est celle recupere par le systeme*/
      updated_at:new Date()
    }
    this.service.updateHabitation(updateHabitation).subscribe(data=>{
      console.log("Habitation modifiee avec success");
      this.ngOnInit();
    });
  }
 
  /* Fonction permettant de lier une habitattion a une autre*/
  linkHabitation():void{
    // this.service.linkHabitation(this.id_link_habitation!,this.current_habitation?.id!).subscribe(
    //   data=>{
    //     console.log(data);
    //     console.log(`L'habitation ${this.id_link_habitation} viens d'etre liee a :  ${this.current_habitation?.intitule}`);
    //     this.refresh();
    //   }
    // )
    let id_pack :number[]=[];
    this.selectedLinked.forEach(link=>{
      console.log(link.id)
      id_pack.push(link.id);
    })
    console.log(id_pack);
    this.service.linkMultipleHabitation(this.current_habitation?.id!,id_pack!).subscribe(
      data =>{
        console.log(data);
        this.refresh();
      }
    )
    console.log(this.selectedLinked);
    console.log(this.current_habitation?.id);
   
  }
  unlinkHabitation():void{
    console.log(this.selectedLinked);
    let id_pack :number[]=[];
    this.selectedLinked.forEach(link=>{
      console.log(link.id)
      id_pack.push(link.id);
    })
    this.service.linkMultipleHabitation(this.current_habitation?.id!,id_pack!).subscribe(
      data =>{
        console.log(data);
        this.refresh();
      })
  }
  getLinkedQuestion(idhabitation:number, etatQuestion:string):void{
    this.QuestionAction=""
    this.linkedContructionQuestions=[];
    this.linkedExploitationQuestions=[];
    this.unlinkedContructionQuestions=[];
    this.unlinkedExploitationQuestions=[];
    this.service.listLinkedHabitationQuestions(idhabitation, etatQuestion).subscribe(
      async data=>{
        await data.forEach((question:any)=>{
          etatQuestion=='construction'
          ?this.linkedContructionQuestions.push({id:question.id,label:question.intitule})
          :this.linkedExploitationQuestions.push({id:question.id,label:question.intitule});
        })
        this.questionList.forEach(question=>{
        console.log(question);
        etatQuestion=='construction'
        ?(this.linkedContructionQuestions.indexOf(question)==-1?this.unlinkedContructionQuestions.push(question):console.log('constrcuc'))
        :(this.linkedExploitationQuestions.indexOf(question)==-1?this.unlinkedExploitationQuestions.push(question):console.log('pass'));
        
        })
        console.log('test');
        
        console.log(this.unlinkedContructionQuestions);
        console.log(this.unlinkedExploitationQuestions)
      }
    )
  }
  linkQuestion():void{
    this.service.linkHabitationToQuestions(this.current_habitation?.id!,this.QuestionEtat,Number(this.selectedQuestion[0].id)).subscribe(
      data=>window.alert(data.message)
    )
  }
  breaklinkQuestion():void{
    this.service.breaklinkHabitationToQuestions(this.current_habitation?.id!,this.QuestionEtat,Number(this.selectedQuestion[0].id)).subscribe(
      data=>window.alert(data.message)
    )
  }
 getLinkedHabitation(id:number)
  {
    this.service.listLinkHabitations(id).subscribe(
      async data=>{
        /*Dans ce cas , nous chargons notre tableau d'Id (linked_current_habitations_id) avec
         les id des differentes habitations liees a celle selectionnee recuperes*/
       await data.forEach((dict:any)=>{
          this.linked_current_habitations_id.push(Number(dict.id));
          this.linked_current_habitations.push({id:dict.id,name:dict.intitule});
        });
        
       this.definitive_list.forEach(habitation=>{
        if(this.linked_current_habitations_id.indexOf(habitation.id!)==-1 && habitation.id !=id)
        {
          this.unlinked_current_habitations.push({id:habitation.id,name:habitation.intitule});
        }
       }) 
      }
    )  
  }

  clear():void{
    this.QuestionEtat  ='';
  this.QuestionAction = '';
  this.selectedQuestion= [];
  this.linkedExploitationQuestions= [];
  this.unlinkedExploitationQuestions= [];
  this.linkedContructionQuestions= [];
  this.unlinkedContructionQuestions= [];
  this.selectedLinked =[];
    this.linkedAction  = "";
this.selectedLinked = [];
this.linked_current_habitations = [];
this.unlinked_current_habitations = [];
this.linked_current_habitations_id = [];
  }
}
