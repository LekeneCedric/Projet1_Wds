import { Component, OnInit } from '@angular/core';
import { PretataireService } from '../../services/pretataire.service';
import  Iprestataire from '../../models/prestataire.model';


@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html',
  styleUrls: ['./prestataire.component.scss']
})
export class PrestataireComponent implements OnInit {

  arrayPrestataires:Iprestataire[] = [];

  idelement:string | undefined;
  searchText:string = " " ;

  idutilisateur:number | undefined ;
  typeelement: string | undefined;
  typeutilisateur: string | undefined;
  nom: string | undefined;
  telephone: string | undefined;
  email: string | undefined;
  pays: string | undefined;
  ville: string | undefined;
  secteur_activite: string | undefined;
  etat_habitation: string | undefined;
  demande: string | undefined; 
  nbpersonne: string | undefined;
  pourequip: string | undefined;
  typeformation: string | undefined;
  localisation: string | undefined;
  fait_le: string | undefined;

  constructor(
    private prestataireservice: PretataireService
  ) { }

  ngOnInit(): void {
    this.getAllPrestatires();
  }

    
  getAllPrestatires(){
    this.prestataireservice.getAllPrestatires().then((data:any) =>{
      this.arrayPrestataires = data ;
    }).catch((err) =>{
      console.log(err.message());
    })
  }

  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

  check(prestataire:Iprestataire){
    this.idutilisateur = prestataire.idutilisateur;
    this.typeelement = prestataire.typeelement ;
    this.typeutilisateur = prestataire.typeutilisateur ;
    this.nom = prestataire.nom ;
    this.email = prestataire.email ;
    this.telephone = prestataire.telephone ;
    this.ville = prestataire.ville ;
    this.pays = prestataire.pays ;
    this.secteur_activite = prestataire.secteur_activite ;
    this.etat_habitation = prestataire.etat_habitation ;
    this.demande = prestataire.demande ;
    this.nbpersonne = prestataire.nbpersonne ;
    this.pourequip = prestataire.pourequip ;
    this.typeformation = prestataire.typeformation ;
    this.localisation = prestataire.localisation ;
    this.fait_le = prestataire.fait_le ;
  }
}
