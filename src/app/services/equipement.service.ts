import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IOutputEquipement from '../models/output_equipement.models';


@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  host:string = environment.host;
  constructor(
    private http : HttpClient,

  ) { }

   // Output_equipement ..............................................................
   getOutputEquipement():Observable<IOutputEquipement[]>{
    return this.http.get<IOutputEquipement[]>(this.host+'/output_equipement');
  }
  getOutputEquipementById(id:number):Observable<IOutputEquipement>{
    return this.http.get<IOutputEquipement>(this.host+'/output_equipement/'+id);
  }
  addOutputEquipement(item:IOutputEquipement):Observable<IOutputEquipement>{
    return this.http.post<IOutputEquipement>(this.host+'/output_equipement',item);
  }
  updateOutputEquipement(id:number,nouveau:IOutputEquipement):Observable<IOutputEquipement>{
    return this.http.put<IOutputEquipement>(this.host+'/output_equipement/'+id+'?_method=PUT',nouveau);
  }
  deleteOutputEquipement(item:IOutputEquipement):Observable<boolean>{
    return this.http.delete<boolean>(this.host+'/output_equipement/'+item.id);
  }
}
