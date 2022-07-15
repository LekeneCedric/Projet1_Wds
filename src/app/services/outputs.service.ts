import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IOutputs from '../models/outputs.models';

@Injectable({
  providedIn: 'root'
})
export class OutputsService {

  host:string = environment.host;
  constructor(
    private http:HttpClient,
  ) { }

   // Outputs ..............................................................................
   getOutputs():Observable<IOutputs[]>{
    return this.http.get<IOutputs[]>(this.host+'/outputs');
  }
  addOutput(item:IOutputs):Observable<IOutputs>{
    return this.http.post<IOutputs>(this.host+'/outputs',item);
  }
  updateOutput(item:IOutputs):Observable<IOutputs>{
    return this.http.put<IOutputs>(this.host+'/outputs/'+item.id,item);
  }
  deleteOutput(item:IOutputs):Observable<boolean>{
    return this.http.delete<boolean>(this.host+'/outputs/'+item.id);
  }
}
