import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IHabitation from '../models/habitation.models';
import {environment} from '../../environments/environment';
import ICategorie from '../models/categorie.models';
import IEquipement from '../models/equipement.models';
import IProposition from '../models/proposition.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // HTTP REQUEST FOR HABITATIONS 
  getHabitations():Observable<IHabitation[]>{
    return this.http.get<IHabitation[]>(`${environment.host}/habitations`);
  }
  postHabitation(item:IHabitation):Observable<IHabitation>{
    return this.http.post<IHabitation>(`${environment.host}/habitations`,item);
  }
  updateHabitation(item:IHabitation):Observable<IHabitation>{
    return this.http.put<IHabitation>(`${environment.host}/habitations/${item.id}`,item);
  }
  deleteHabitation(item:IHabitation):Observable<IHabitation>{
     return this.http.delete<IHabitation>(`${environment.host}/habitations/${item.id}`);
  }

  // HTTP REQUEST FOR CATEGORIE
  
  getCategories():Observable<ICategorie[]>{
    return this.http.get<ICategorie[]>(`${environment.host}/categories`);
  }
  postCategorie(item:ICategorie):Observable<ICategorie>{
    return this.http.post<ICategorie>(`${environment.host}/categories`,item);
  }
  updateCategorie(item:ICategorie):Observable<ICategorie>{
    return this.http.put<ICategorie>(`${environment.host}/categories/${item.id}`, item);
  }
  deleteCategorie(item:ICategorie):Observable<ICategorie>{ 
    return this.http.delete<ICategorie>(`${environment.host}/categories/${item.id}`);
  }

  // HTTP REQUEST FOR EQUIPEMENT

  getEquipements():Observable<IEquipement[]>{
    return this.http.get<IEquipement[]>(`${environment.host}/questionselt/equipements`);
  }
  postEquipement(item:IEquipement):Observable<IEquipement>{
   return this.http.post<IEquipement>(`${environment.host}/categories`, item);
  }
  updateEquipement(item:IEquipement):Observable<IEquipement>{
    return this.http.put<IEquipement>(`${environment.host}/categories/${item.id}`, item);
  }
  deleteEquipement(item:IEquipement):Observable<IEquipement>{
    return this.http.delete<IEquipement>(`${environment.host}/categories/${item.id}`);
  }

  // HTTP REQUEST FOR PROPOSITION

  // Recuperer plusieurs propositions
  getPropositions():Observable<IProposition[]>{
    return this.http.get<IProposition[]>(`${environment.host}/propositions`);
  }
  // Recuperer une seule proposition
  getProposition(item:IProposition):Observable<IProposition>{
    return this.http.get<IProposition>(`${environment.host}/propositions/${item.id}`);
  }
  postProposition(item:IProposition):Observable<IProposition>{
  return this.http.post<IProposition>(`${environment.host}/propositions`,item);
  }
  updateProposition(item:IProposition):Observable<IProposition>{
    return this.http.put<IProposition>(`${environment.host}/propositions/${item.id}`, item);
  }
  deleteProposition(item:IProposition):Observable<IProposition>{
    return this.http.delete<IProposition>(`${environment.host}/propositions/${item.id}`);
  }
}
