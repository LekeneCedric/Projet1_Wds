import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private router : Router,
    
  ) { }

    // Vigilance ..........................................................................
    getAllVigilance():Observable<IVigilance[]>{
      return this.http.get<IVigilance[]>(this.host+'/vigilance');
    }
    getVigilanceById(id:number):Observable<IVigilance[]>{
      return this.http.get<IVigilance[]>(this.host+'/vigilance/'+id);
    }
    addVigilance(item:IVigilance):Observable<IVigilance>{
      return this.http.post<IVigilance>(this.host+'/vigilance',item);
    }
    updateVigilance(id:number,nouveau:IVigilance):Observable<IVigilance>{
      return this.http.put<IVigilance>(this.host+'/vigilance/'+id,nouveau);
    }
    deleteVigilance(item:IVigilance):Observable<boolean>{
      return this.http.delete<boolean>(this.host+'/vigilance/'+item.id);
    }
    routeByState(keyword:string):void{
     this.router.navigate(['/propositionselt/getvigilance/'+keyword]); 
    }

    searchByState(keyword:string):Observable<IVigilance[]>{
      return this.http.get<IVigilance[]>(this.host+'/propositionselt/getvigilance/'+keyword);
    
    }


}
