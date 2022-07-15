import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IOutputEnvironnement from '../models/output_environnement.models';

@Injectable({
  providedIn: 'root'
})
export class EnvironnementService {

  host:string = environment.host;
  constructor(
    private http : HttpClient,

  ) { }

  // Output_environnement ..............................................................
  getOutputenvironnement():Observable<IOutputEnvironnement[]>{
    return this.http.get<IOutputEnvironnement[]>(this.host+'/output_environnement');
  }
  addOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.http.post<IOutputEnvironnement>(this.host+'/output_environnement',item);
  }
  updateOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.http.put<IOutputEnvironnement>(this.host+'/output_environnement/'+item.id,item);
  }
  deleteOutputenvironnement(item:IOutputEnvironnement):Observable<boolean>{
    return this.http.delete<boolean>(this.host+'/output_environnement/'+item.id);
  }
}
