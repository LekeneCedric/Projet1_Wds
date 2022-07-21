import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IHabitation from 'src/app/models/habitation.models';
import { HabitationsService } from 'src/app/services/habitations.service';

@Component({
  selector: 'app-habitations',
  templateUrl: './habitations.component.html',
  styleUrls: ['./habitations.component.scss']
})
export class HabitationsComponent implements OnInit {

  constructor(private service:HabitationsService,private router:Router) { }
  update_intitule?: string;
  /*Current_habitation ici renvoie a l'habitation selectionnee
  a la quelle l'admin veux appliquer les modifications*/
  current_habitation?:IHabitation;
  /*habitations_list ici renvoie a un tableau contenant la liste de toutes les habitations*/
  habitations_list:IHabitation[]=[];
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
  linked_current_habitations:number[]=[];
  /**/
  async ngOnInit(){
    /*A l'initialisation de notre composants , on recupere toutes les habitations*/
    await this.service.getAllHabitations().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.habitations_list = data;
    })

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
    this.lier = true ? this.linked_current_habitations.indexOf(Number(event.target.value)) ==-1 : this.lier=false;
  }
  /*Cette methode permet de recuperer l'habitation acutellement selectionner 
  afin d'y appliquer des modification*/ 
  setCurrentHabitation(habitation:IHabitation){
    this.update_intitule = this.current_habitation?.intitule;
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
    this.service.linkHabitation(this.id_link_habitation!,this.current_habitation?.id!).subscribe(
      data=>{
        console.log(data);
        console.log(`L'habitation ${this.id_link_habitation} viens d'etre liee a :  ${this.current_habitation?.intitule}`);
        this.refresh();
      }
    )
   
  }
 getLinkedHabitation(id:number)
  {
    this.service.listLinkHabitations(id).subscribe(
      async data=>{
        console.log(data);
        /*Dans ce cas , nous chargons notre tableau d'Id (linked_current_habitations) avec
         les id des differentes habitations liees a celle selectionnee recuperes*/
       await data.forEach((dict:any)=>{
          this.linked_current_habitations.push(Number(dict.id));
        })

        console.log(this.linked_current_habitations)
      }
    )  
  }
}
