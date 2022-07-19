import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IEquipement from '../models/equipement.models';
import ITypeEquipement from '../models/typeequipement.models';

@Injectable({
  providedIn: 'root'
})
export class EquipementsService {

  constructor(private http:HttpClient) { }

  // HTTP REQUEST FOR EQUIPEMENT AND TYPE

  getAllEquipementsQuestions():Observable<IEquipement[]>{
    return this.http.get<IEquipement[]>(`${environment.host}/questionselt/equipement`);
  }
  getAllEquipements():Observable<IEquipement[]>{
    return this.http.get<IEquipement[]>(`${environment.host}/propositions`);
  }
  
  postEquipement(data:IEquipement):Observable<IEquipement>{
    return this.http.post<IEquipement>(`${environment.host}/propositions`, data);
  }
  getEquipement(data:IEquipement):Observable<IEquipement>{
     return this.http.get<IEquipement>(`${environment.host}/propositions/${data.id}`);  
  }
  deleteEquipement(id:number):Observable<void>{
     return this.http.delete<any>(`${environment.host}/propositions/${id}`);  
  }
  putEquipement(data:IEquipement):Observable<void>{
    return this.http.put<any>(`${environment.host}/propositions/${data.id}`,data);
  }
}
