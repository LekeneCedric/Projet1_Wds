import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IVigilance from '../models/vigilance.models';

@Injectable({
  providedIn: 'root'
})
export class VigilanceService {
  
  host:string = environment.host;
  constructor(
    private http : HttpClient,
    
  ) { }

    // Vigilance ..........................................................................
    getAllVigilance():Observable<IVigilance[]>{
      return this.http.get<IVigilance[]>(this.host+'/vigilance');
    }
    addVigilance(item:IVigilance):Observable<IVigilance>{
      return this.http.post<IVigilance>(this.host+'/vigilance',item);
    }
    updateVigilance(item:IVigilance):Observable<IVigilance>{
      return this.http.put<IVigilance>(this.host+'/vigilance/'+item.id,item);
    }
    deleteVigilance(item:IVigilance):Observable<boolean>{
      return this.http.delete<boolean>(this.host+'/vigilance/'+item.id);
    }
    searchByState(keyword:string):Observable<IVigilance[]>{
      return this.http.get<IVigilance[]>(this.host+'/vigilance?etat_like='+keyword);
    }
}
