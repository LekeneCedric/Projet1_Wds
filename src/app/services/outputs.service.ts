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
  getOutputById(id:number):Observable<IOutputs>{
    return this.http.get<IOutputs>(this.host+'/outputs/'+id);
  }
  addOutput(item:IOutputs):Observable<IOutputs>{
    return this.http.post<IOutputs>(this.host+'/outputs',item);
  }
  updateOutput(id:number,nouveau:IOutputs):Observable<IOutputs>{
    return this.http.put<IOutputs>(this.host+'/outputs/'+id+'?_method=PUT',nouveau);
  }
  deleteOutput(item:IOutputs):Observable<boolean>{
    return this.http.delete<boolean>(this.host+'/outputs/'+item.id);
  }

  linkToEquipement(idOutput:number,idEquipementsArr:number | number[]):Observable<any>{
    return this.http.post<any>(`${environment.host}/output_equipementelt/save`,{
      idoutput:idOutput,
      idequipement:idEquipementsArr
     }) 
  }

  getEquipementsForLink():Observable<any[]>{
    return this.http.get<any[]>(this.host+'/questionselt/equipement/search');
  }
}
