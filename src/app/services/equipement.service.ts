import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IOutputEqupement from '../models/output_equipement.models';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  host:string = environment.host;
  constructor(
    private http : HttpClient,

  ) { }

   // Output_equipement ..............................................................
   getOutputEquipement():Observable<IOutputEqupement[]>{
    return this.http.get<IOutputEqupement[]>(this.host+'/output_equipement');
  }
  addOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.http.post<IOutputEqupement>(this.host+'/output_equipement',item);
  }
  updateOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.http.put<IOutputEqupement>(this.host+'/output_equipement/'+item.id,item);
  }
  deleteOutputEquipement(item:IOutputEqupement):Observable<boolean>{
    return this.http.delete<boolean>(this.host+'/output_equipement/'+item.id);
  }
}
