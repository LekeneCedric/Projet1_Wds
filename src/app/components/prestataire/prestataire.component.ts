import { Component, OnInit } from '@angular/core';
import { PretataireService } from '../../services/pretataire.service';
import  Iprestataire from '../../models/prestataire.model';
import PagePrestataire from '../../models/pages/Pages.Pestataire.models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html',
  styleUrls: ['./prestataire.component.scss']
})
export class PrestataireComponent implements OnInit {

  arrayPrestataires:Iprestataire[] = [];

  idelement:string | undefined;
  searchText:string = ""

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

  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;
  currentPage:number ;

  constructor(
    private prestataireservice: PretataireService
  ) { }

  ngOnInit(): void {
    this.getAllPrestatires();
    this.gotoPage(0);
  }

    
  getAllPrestatires(){
    this.prestataireservice.getAllPrestatires().then((data:any) =>{
      this.arrayPrestataires = data.reverse(); ;
     // console.log(this.arrayPrestataires);
      this.onGetPageVigilance();
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

  //pagination functions

  getPage(page:number,size:number):Observable<PagePrestataire>{
  
    let index = page * size;
    let totalPages = ~~(this.arrayPrestataires.length/size);
    if(this.arrayPrestataires.length % size != 0)
      totalPages ++;
    let pageAbonnements = this.arrayPrestataires.slice(index,index+size);
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
        this.arrayPrestataires = data.prestataires;
        this.totalPages = data.totalPages;
      }
    )
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.getAllPrestatires();
  }

  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.arrayPrestataires.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.arrayPrestataires.length;
    }
    this.getAllPrestatires();
  }
}




