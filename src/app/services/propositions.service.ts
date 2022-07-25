import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IProposition from '../models/proposition.models';

@Injectable({
  providedIn: 'root'
})
export class PropositionsService {

  constructor(private http:HttpClient) { }
  // HTTP REQUEST FOR PROPOSITION

  // Recuperer plusieurs propositions
  getAllPropositions():Observable<IProposition[]>{
    return this.http.get<IProposition[]>(`${environment.host}/propositions`);
  }
  // Recuperer une seule proposition
  getOneProposition(id:number):Observable<IProposition>{
    return this.http.get<IProposition>(`${environment.host}/propositions/${id}`);
  }
  // Ajouter une proposition
  addProposition(item:IProposition):Observable<any>{
  return this.http.post<IProposition>(`${environment.host}/propositions`,item);
  }
  // Modifier une proposition
  updateProposition(item:IProposition):Observable<IProposition>{
    return this.http.put<IProposition>(`${environment.host}/propositions/${item.id}`, item);
  }
  // Supprimer une proposition
  deleteProposition(id:number):Observable<IProposition>{
    return this.http.delete<IProposition>(`${environment.host}/propositions/${id}`);
  }
}
