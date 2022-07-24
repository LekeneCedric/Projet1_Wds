import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IHabitation from '../models/habitation.models';

@Injectable({
  providedIn: 'root'
})
export class HabitationsService {

  constructor(private http:HttpClient) { }

  // HTTP REQUEST FOR HABITATIONS 
  // Permet de recuperer toutes les habitations
  getAllHabitations():Observable<IHabitation[]>{
    return this.http.get<IHabitation[]>(`${environment.host}/habitations`);
  }
  // Permet de recuperer une habitation
  getOneHabitation(id:number):Observable<IHabitation>{
   return this.http.get<IHabitation>(`${environment.host}/habitations/${id}`);
  }
  // Permet d'ajouter une habitation
  addHabitation(item:IHabitation):Observable<any>{
    return this.http.post<IHabitation>(`${environment.host}/habitations`,item);
  }
  updateHabitation(item:IHabitation):Observable<any>{
    return this.http.put<IHabitation>(`${environment.host}/habitations/${item.id}`,item);
  }
  deleteHabitation(id:number):Observable<any>{
     return this.http.delete<IHabitation>(`${environment.host}/habitations/${id}`);
  }
  // Fonction permettant de lier une habitation a une autre
  linkHabitation(idhabitation:number, idorigine:number):Observable<any>{
     return this.http.post<any>(`${environment.host}/habitations/save`,{
      idhabitation:idhabitation,
      idorigine:idorigine
     }) 
  }
  // Fonction permettant de lier de maniere multiple une habitation a plusieurs habitations
  linkMultipleHabitation(idorigine:number,habitations:number[]):Observable<any>{
    console.log(`test${idorigine}, ${habitations}`);
    console.log(habitations)
    return this.http.post<any>(`${environment.host}/habitations/save`,{
      idorigine: idorigine,
      idhabitation: habitations
    })
  }
  // Fonction permmetant de lier une habitation a une ou plusieurs questions
  linkHabitationToQuestions(idhabitation:number,etat:string,idquestion:number):Observable<any> {
    return this.http.post<any>(`${environment.host}/questionselt/getquestionhabitation/${idhabitation}~${etat}~${idquestion}/save`,{});
  }
  breaklinkHabitationToQuestions(idhabitation:number,etat:string,idquestion:number):Observable<any> {
    return this.http.post<any>(`${environment.host}/questionselt/getquestionhabitation/${idhabitation}~${etat}~${idquestion}/delete`,{});
  }
  listLinkedHabitationQuestions(idhabitation:number,etat:string):Observable<any>{
    return this.http.get(`${environment.host}/questionselt/getquestionhabitation/${idhabitation}~${etat}`);
  }
  //Fonction permettant de lister toutes les habitatiions liees a une habitation
  listLinkHabitations(idhabitation:number):Observable<any>
  {
    return this.http.get<any[]>(`${environment.host}/habitationsautres/${idhabitation}`)
  }
}
