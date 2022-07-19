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

  id:number;
  couverture:string | undefined = " ";
  titre:string | undefined = " ";
  description: string | undefined;
  semidescription: string | undefined;

  searchText:string= "";
  descriptionContent = "";
  semiDescriptionContent = "";


  constructor(
    private conseil: ConseilService
  ) { }

  ngOnInit(): void {
   this.getAllConseils();
  }

  getAllConseils(){
    this.conseil.getAllConseils().then((data:any) =>{
      this.arrayConseil = data;
      console.log(this.arrayConseil);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
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
    this.conseilItem.id = lastId+1;

    //utilisation de la fonction d'ajout du service
    this.conseil.addConseil(this.conseilItem).then((data) => {
      console.log("conseil add successfully"+ data);

      this.getAllConseils();
     

    }).catch((err)=>{
      console.log("enable add" + err.message());
    });
      this.couverture = " ";
      this.titre = " ";
      this.description = " ";
      this.semidescription = " "; 
  }

  updateConseille(conseil:Iconseil){
  
    // recuperation des nouvelles valeurs 
   // alert(conseil.id);
    this.conseilItem.id = this.id!;
    this.conseilItem.couverture = this.couverture! ;
    this.conseilItem.titre = this.titre!;
    this.conseilItem.description = this.description!;
    this.conseilItem.semidescription = this.semidescription!;

    this.conseil.updateConseil(this.conseilItem).then((data)=>{
      console.log("conseil update successfully"+ data);
      this.getAllConseils();
    }).catch((err)=>{
      console.log("enable update" + err.message());
    });
    this.getAllConseils();
  }
  
  deleteConseil(conseil:Iconseil){
   /*if this.conseil.deleteConseil(conseil.id).subscribe(data =>{
      console.log("conseil delete successfully"+ data);
    },(err)=>{
      console.log("enable to delete"+ err.message())
    })*/
    if(window.confirm("est vous sure de vouloir supprimer le conseil de titre "+`${conseil.titre}`)){
      this.conseil.deleteConseil(conseil.id).then((data)=>{
        console.log("conseil delete successfully"+ data);
        this.getAllConseils();
      }).catch((err)=>{
        console.log("enable delete" + err.message());
      });
    }
  
  }


  on(serachvalue:string){
    this.searchText = serachvalue;
  }
  //( search) =  on($event)
  //chargement de description et de semidescription dans des variables 
  check(conseil:Iconseil){
    this.titre = conseil.titre;
    this.descriptionContent = conseil.description;
    this.semiDescriptionContent = conseil.semidescription;
  }

  checkUpdate(conseil:Iconseil){
      //console.log(conseil);
      //chargement des information a modifier 
      this.id = conseil.id;
      this.couverture = conseil.couverture;
      this.titre = conseil.titre;
      this.description = conseil.description;
      this.semidescription = conseil.semidescription;
      console.log(this.descriptionContent);
  }

  clear(){
    this.titre = " ";
    this.description = " ";
    this.semidescription = " ";
  }
}
