import { Component, OnInit } from '@angular/core';
import { AbonnementService } from '../../services/abonnement.service';
import  Iabonnement  from '../../models/abonnements.models';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {

  arrayAbonnements:Iabonnement[] = [];
  abonnementItem:Iabonnement = {
    id: 0,
    periode: 0,
    intitule: '',
    frequence: '',
    montant: 0,
    description: '',
    created_at: null,
    updated_at: null
  };

  periode:number | undefined ;
  frequence:string | undefined;
  montant:number | undefined;
  description: string | undefined;
  created_at:  Date | null;
  updated_at:  Date | null;
  intitule: string | undefined;
  
  searchText:string = " ";

  descriptionContent = " ";
  id:number | undefined ;
  
  constructor(
    private abonnementservice:AbonnementService
  ) { }

  ngOnInit(): void {
    this.getAllAbonnement();
  }

  getAllAbonnement(){
    this.abonnementservice.getAllAbonnements().then((data:any) =>{
      this.arrayAbonnements = data;
      console.log(this.arrayAbonnements);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
  }

  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

  addAbonnement(){

    let lastId = 0;
    let taille = 0;
    this.abonnementItem.periode = this.periode! ;
    this.abonnementItem.frequence = this.frequence!;
    this.abonnementItem.description = this.description!;
    this.abonnementItem.montant = this.montant!;
    this.abonnementItem.intitule = this.intitule!;
    this.abonnementItem.created_at = null;
    this.abonnementItem.updated_at = null;
    //recuperation du dernier id
   
    taille = this.arrayAbonnements.length;
    lastId = this.arrayAbonnements[taille-1].id;
    this.abonnementItem.id = lastId+1;

    //utilisation de la fonction d'ajout du service
    this.abonnementservice.addAbonnement(this.abonnementItem).then((data) => {
      console.log("abonnement add successfully"+ data);
      this.getAllAbonnement();
    }).catch((err)=>{
      console.log("enable add" + err.message());
    });
      this.periode = 0;
      this.frequence = " ";
      this.description = " "; 
      this.created_at = new Date();
      this.updated_at = new Date();
      this.montant = 0 ;
      this.created_at = null;
      this.updated_at = null;
      this.intitule = " ";
  }

  clear(){
    
    this.periode = 0;
    this.frequence = " ";
    this.montant = 0 ;
    this.intitule = " ";
    this.description = " ";

  }
  check(abonnement:Iabonnement){
    this.periode = abonnement.periode;
    this.frequence = abonnement.frequence;
    this.description = abonnement.description ;
    this.montant = abonnement.montant ;
    this.intitule = abonnement.intitule ;
    this.created_at = abonnement.created_at;
    this.updated_at = abonnement.updated_at ;
    this.descriptionContent = this.description;
  }

  checkUpdate(abonnement:Iabonnement){
    this.id = abonnement.id;
    this.periode = abonnement.periode;
    this.frequence = abonnement.frequence;
    this.description = abonnement.description ;
    this.montant = abonnement.montant ;
    this.intitule = abonnement.intitule ;
  }

  updateAbonnement(abonnement:Iabonnement){
       this.abonnementItem.id = this.id!;
       this.abonnementItem.periode = this.periode!;
       this.abonnementItem.frequence = this.frequence!;
       this.abonnementItem.description = this.description!;
       this.abonnementItem.montant = this.montant!;
       this.abonnementItem.intitule = this.intitule!;

       this.abonnementservice.updateAbonnement(this.abonnementItem).then((data) => {
        console.log("abonnement update successfully");
        this.getAllAbonnement();
       }).catch((err)=>{
        console.log("enable update" + err.message());
       })
  }

  deleteAbonnement(abonnement:Iabonnement){
     if(window.confirm("est vous sure de vouloir supprimer le conseil de titre "+`${abonnement.intitule}`)){
       this.abonnementservice.deleteAbonnement(abonnement.id).then((data)=>{
         console.log("conseil delete successfully"+ data);
         this.getAllAbonnement();
       }).catch((err)=>{
         console.log("enable delete" + err.message());
       });
     }
   
   }
}
