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

  getAllEquipements():Observable<IEquipement[]>{
    return this.http.get<IEquipement[]>(`${environment.host}/questionselt/equipement`);
  }
  getTypeEquipement():Observable<ITypeEquipement[]>{
    return this.http.get<ITypeEquipement[]>(`${environment.host}/questionselt/equipement/search`);
  }  
}
