import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConseilService } from '../../services/conseil.service';
import  Iconseil  from '../../models/conseils.models';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.scss']
})
export class ConseilComponent implements OnInit {

  arrayConseil:Iconseil[] = [];

  conseilItem:Iconseil= {
    id: 0,
    couverture: '',
    titre: '',
    description: '',
    semidescription: ''
  }

  couverture:string | undefined;
  titre:string | undefined;
  description: string | undefined;
  semidescription: string | undefined;

  searchText:string= "";

  constructor(
    private conseil: ConseilService
  ) { }

  ngOnInit(): void {

    this.conseil.getAllConseils().subscribe(data =>{
      this.arrayConseil = data;
      console.table(this.arrayConseil);
    });
  }

  addConseil(){

    let lastId = 0;
    let taille = 0;
    this.conseilItem.couverture = this.couverture! ;
    this.conseilItem.titre = this.titre!;
    this.conseilItem.description = this.description!;
    this.conseilItem.semidescription = this.semidescription!;

    //recuperation du dernier id
   
    taille = this.arrayConseil.length;
    lastId = this.arrayConseil[taille-1].id;
    this.conseilItem.id = lastId+2;

    //utilisation de la fonction d'ajout du service
    this.conseil.addConseil(this.conseilItem).then((data) => {
      console.log("conseil add successfully"+ data);
    }).catch((err)=>{
      console.log("enable add" + err.message());
    })
  }

  updateConseille(conseil:Iconseil){
    
    // recuperation des nouvelles valeurs 

    this.conseil.updateConseil(conseil).then((data)=>{
      console.log("conseil update successfully"+ data);
    }).catch((err)=>{
      console.log("enable update" + err.message());
    })
  }
  
  deleteConseil(conseil:Iconseil){
   /*if this.conseil.deleteConseil(conseil.id).subscribe(data =>{
      console.log("conseil delete successfully"+ data);
    },(err)=>{
      console.log("enable to delete"+ err.message())
    })*/
    this.conseil.deleteConseil(conseil.id).then((data)=>{
      console.log("conseil delete successfully"+ data);
    }).catch((err)=>{
      console.log("enable delete" + err.message());
    })
  }
 
  on(serachvalue:string){
    this.searchText = serachvalue;
  }
  //( search) =  on($event)
}
