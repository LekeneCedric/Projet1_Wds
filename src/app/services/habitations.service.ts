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
}
