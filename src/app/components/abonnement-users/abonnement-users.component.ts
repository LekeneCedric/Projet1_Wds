import { Component, OnInit } from '@angular/core';
import { AbonnementSearchService } from '../../services/abonnement-search.service';
import  IabonnementSearch  from '../../models/abonnement_users.models';
import IabonnementSend from '../../models/abonnement_send.model';
import  PageAbonnement from'../../models/pages/Page.Abonnement.models';
import Iuser from  '../../models/users.models'
import { Observable, of } from 'rxjs';
import { AbonnementService } from '../../services/abonnement.service';
import  Iabonnement  from '../../models/abonnements.models';

@Component({
  selector: 'app-abonnement-users',
  templateUrl: './abonnement-users.component.html',
  styleUrls: ['./abonnement-users.component.scss']
})
export class AbonnementUsersComponent implements OnInit {

  arrayAbonnementSearch: IabonnementSearch[] = [];
  definitiveArray:IabonnementSearch[] = [];
  copySearch : IabonnementSearch[] = [];

  arrayAbonnements:Iabonnement[] = [];
  typeOfAbonnement:string[] = [];

  oneAbonnement: IabonnementSearch[] = [];
  tabel: Iuser[] = [];
  searchText:string = "";

  infoUser:Iuser={
    id: 0,
    nom: '',
    email: '',
    password: '',
    telephone: 0,
    profession: '',
    profile: '',
    isconnecter: 0,
    created_at: new Date,
    updated_at: new Date
  };
 
  abonnementSendItem: IabonnementSend={
    user: '',
    abonnement: '',
    etat: ''
  }

  test:IabonnementSearch = {
    id: 0,
    idabonnement: 0,
    iduser: 0,
    datedeb: new Date,
    datefin: new Date,
    montant: 0,
    etat: 0,
    created_at: null,
    updated_at: null,
    utilisateurs: [] 
  }

  arrayAbonnement:number[] = [];
  arrayEtat:number[] = [];

  arrayUser:string[] = [];
  arrayIdUser:number[] = [];

  arrayAbo:string[] = [];
  arrayIdAbo:number[] = [];

  currentPage:number ;

  user:string | number | undefined = 41;
  abonnement:string |number | undefined = 2;
  etat:string | number | undefined = 0;

  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;
  
  constructor(
    private abonnementsearchservice: AbonnementSearchService,
    private abonnementservice:AbonnementService
  ) { }

  ngOnInit(): void {
    this.getAllAbonnementSearch();
    this.getAllAbonnement();
    this.gotoPage(0);
  }


  getAllAbonnementSearch(){
    this.abonnementsearchservice.getAllUserAbonnementSearch().then((data:any) =>{
      this.arrayAbonnementSearch = data.reverse();
      this.definitiveArray = data;
      this.copySearch = data;
      this.onGetPageVigilance();
      //console.log(this.arrayAbonnementSearch);
      this.allAbonnement();
      this.allEtat();
      this.allUser();
      this.tekTypeOfAbonnement();
    }).catch((err) =>{
    //  console.log(err.message());
    }
    );
  }

  getAllAbonnement(){
    this.abonnementservice.getAllAbonnements().then((data:any) =>{
      this.arrayAbonnements = data.reverse();
     // console.log(this.arrayAbonnements);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
  }

  allAbonnement(){
   
    let taille = 0;
    taille = this.arrayAbonnements.length;

    for(var i = 0; i < taille ;i++){
      // console.log(i);
      if (this.arrayAbonnements[i]?.intitule !== undefined){
        this.arrayAbo[i] = this.arrayAbonnements[i]?.intitule;
        this.arrayIdAbo [i] = this.arrayAbonnements[i]?.id;
      }
    
     }
  }

  allEtat(){
    let taille = 0;
    taille = this.arrayAbonnementSearch.length;
    for(let i = 0; i < taille ;i++){
      this.arrayEtat[i] = this.arrayAbonnementSearch[i].etat;
    }

  }

  checkAbonnement(search:IabonnementSearch){
    this.abonnementsearchservice.getOnUserAbonnement(search.id).then((data:any) => {
      this.test = data;
      //this.infoUser = this.test.utilisateurs ;
    //  console.log(this.test.utilisateurs);
      this.tabel! = this.test.utilisateurs;
      console.log("user"+this.tabel[0].nom)
    }).catch((err) => {
      console.error("une erreur"+err.message());
    });
  }


  allUser(){
    let taille = 0;
    taille = this.definitiveArray.length;
   // console.log(taille)
    for(var i = 0; i < taille ;i++){
     // console.log(i);
      if(this.copySearch[i]?.utilisateurs[0]?.nom !== undefined){
        this.arrayUser[i] =this.copySearch[i]?.utilisateurs[0]?.nom;
        this.arrayIdUser[i] = this.copySearch[i]?.iduser
      }
    }
    this.arrayUser = this.arrayUser.filter((ele,pos)=>{
      return this.arrayUser.indexOf(ele) == pos;
    });

    this.arrayIdUser = this.arrayIdUser.filter((ele,pos)=>{
      return this.arrayIdUser.indexOf(ele) == pos;
    })
   
  }

  getAbonnementByParameter(){
  
    this.abonnementSendItem.user = this.user! ;
    this.abonnementSendItem.abonnement = this.abonnement!;
    this.abonnementSendItem.etat = this.etat! ;
   
    this.abonnementsearchservice.sendAbonnement(this.abonnementSendItem).then((data:any)=>{
      this.arrayAbonnementSearch = data;
    //  console.log(this.arrayAbonnementSearch);
      this.tekTypeOfAbonnement()
    }).catch((err) =>{
      console.log(err.message());
    })
  }

  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

  onSelectAbonnement(value1:string){
    //alert(value1);
    this.abonnement = value1
  }
  onselectEtat(value:string){
  //  alert(value)
    this.etat = value;
  }
  onselectUser(value2:string){
   // alert(value2);
    this.user = value2;
  
  }

  //pagination
  getPage(page:number,size:number):Observable<PageAbonnement>{
  
    let index = page * size;
    let totalPages = ~~(this.arrayAbonnementSearch.length/size);
    if(this.arrayAbonnementSearch.length % size != 0)
      totalPages ++;
    let pageAbonnements = this.arrayAbonnementSearch.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      abonnements:pageAbonnements
    })
  }
  onGetPageVigilance(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.arrayAbonnementSearch = data.abonnements;
        this.totalPages = data.totalPages;
      }
    )
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.getAllAbonnementSearch();
  }
  
  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.arrayAbonnementSearch.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.arrayAbonnementSearch.length;
    }
    this.getAllAbonnementSearch();
  }
// space
  tekTypeOfAbonnement(){
    let taille = this.arrayAbonnementSearch.length;
    let taille2 = this.arrayAbonnements.length
    for (let i = 0; i < taille ;i++){
      for(let j = 0; j < taille2 ;j++){
          if(this.arrayAbonnementSearch[i].idabonnement === this.arrayAbonnements[j].id ){
           this.typeOfAbonnement[i] = this.arrayAbonnements[j].intitule
      }
      }
    }
 //   console.log(this.typeOfAbonnement);
  }
  
}
