import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IFormation from '../models/formations.models';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  host:string = environment.host;
  constructor(
    private http:HttpClient,
  ) { }

     // Formations ..........................................................................
     getAllFormation():Observable<IFormation[]>{
      return this.http.get<IFormation[]>(this.host+'/formations');
    }
    getFormationById(id:number):Observable<IFormation>{
      return this.http.get<IFormation>(this.host+'/formations/'+id);
    }
    addFormation(item:IFormation):Observable<IFormation>{
      return this.http.post<IFormation>(this.host+'/formations',item);
    }
    updateFormation(id:number,nouveau:IFormation):Observable<IFormation>{
      return this.http.put<IFormation>(this.host+'/formations/'+id+'?_method=PUT',nouveau);
    }
    deleteFormation(item:IFormation):Observable<boolean>{
      return this.http.delete<boolean>(this.host+'/formations/'+item.id);
    }

}
