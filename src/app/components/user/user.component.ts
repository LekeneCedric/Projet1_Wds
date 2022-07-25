import { Component, OnInit } from '@angular/core';
import {  UserService } from '../../services/user.service';
import { AbonnementHistoriqueService } from '../../services/abonnement-historique.service';
import { UserReponseeltService } from '../../services/user-reponseelt.service';
import Iuser from '../../models/users.models';
import Iabonnement_historique from '../../models/abonnement_historique';
import Iuser_reponseelt from '../../models/user_reonseelt_historique';


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

  constructor(
    private userservice:UserService,
    private abonnementhistoriqueservice:AbonnementHistoriqueService,
    private userreponseeltservice:  UserReponseeltService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  //recher d'un utilisateur
  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

  getAllUsers(){
    this.userservice.getAllUsers().then((data:any) =>{
      this.arrayUser = data;
      console.log(this.arrayUser);
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
      console.log(this.arrayAbonnementHistorique);
    }).catch((err) =>{
      console.log(err.message());
    })
  }

  getUserReponseel(user:Iuser){
    this.userreponseeltservice.getAllUserReponseelt(user.id).then((data:any) => {
      this.arryUserReponseelt = data;
      console.log(data);
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
}
