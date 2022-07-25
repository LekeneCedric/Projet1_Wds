import { Component, OnInit } from '@angular/core';
import {  UserService } from '../../services/user.service';
import { AbonnementHistoriqueService } from '../../services/abonnement-historique.service';
import { UserReponseeltService } from '../../services/user-reponseelt.service';
import Iuser from '../../models/users.models';
import Iabonnement_historique from '../../models/abonnement_historique';
import Iuser_reponseelt from '../../models/user_reonseelt_historique';
import { Observable, of } from 'rxjs';
import PageUser from '../../models/pages/Page.Utilisateur.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  searchText: string= "";
  arrayUser: Iuser[]= [];
  arrayAbonnementHistorique: Iabonnement_historique[] = [];
  arryUserReponseelt: Iuser_reponseelt[] = [];

  titre: string;
  duree: string;
  periode: Date;
  couleur: string;

  //info user
  nom: string;
  email: string;
  password: string;
  telephone: number;
  profession: string;
  profile: string;
  isconnecter: number;
  created_at: Date;
  updated_at: Date

  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;
  currentPage:number ;

  
  constructor(
    private userservice:UserService,
    private abonnementhistoriqueservice:AbonnementHistoriqueService,
    private userreponseeltservice:  UserReponseeltService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.gotoPage(0);
  }

  //recher d'un utilisateur
  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

  getAllUsers(){
    this.userservice.getAllUsers().then((data:any) =>{
      this.arrayUser = data.reverse();
      this.onGetPageVigilance();
     // console.log(this.arrayUser);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
  }

  getAbonnementHistorique(user:Iuser){
    this.abonnementhistoriqueservice.getAllAbonnement_Historique(user.id).then((data:any) =>{
      this.arrayAbonnementHistorique = data;
      //chargement de valeur de l'historique d'un utilisateur
      this.arrayAbonnementHistorique = data;
     // console.log(this.arrayAbonnementHistorique);
    }).catch((err) =>{
      console.log(err.message());
    })
  }

  getUserReponseel(user:Iuser){
    this.userreponseeltservice.getAllUserReponseelt(user.id).then((data:any) => {
      this.arryUserReponseelt = data;
    //  console.log(data);
    }).catch((err) => {
      console.error(err.message());
    })
  }

  check(user:Iuser){

   this.nom = user.nom ;
   this.email= user.email ; 
   this.password = user.password ;
   this.telephone = user.telephone ;
   this.profession = user.profession ;
   this.profile = user.profile ;
   this.isconnecter = user.isconnecter ;
   this.created_at = user.created_at ;
   this.updated_at = user.updated_at ;

  }

  //pagination
  getPage(page:number,size:number):Observable<PageUser>{
  
    let index = page * size;
    let totalPages = ~~(this. arrayUser.length/size);
    if(this. arrayUser.length % size != 0)
      totalPages ++;
    let pageAbonnements = this.arrayUser.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      prestataires:pageAbonnements
    })
  }

  onGetPageVigilance(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.arrayUser= data.prestataires;
        this.totalPages = data.totalPages;
      }
    )
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.getAllUsers();
  }

  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.arrayUser.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.arrayUser.length;
    }
    this.getAllUsers();
  }
}
