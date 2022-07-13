import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IEntreprisesFormation from '../models/entreprises_formations.models';
import IFormation from '../models/formations.models';
import IOutputs from '../models/outputs.models';
import IOutputEnvironnement from '../models/output_environnement.models';
import IOutputEqupement from '../models/output_equipement.models';
import IVigilance from '../models/vigilance.models';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  host = environment.host;
  constructor(
    private httpClient:HttpClient,

  ) { }

  // Vigilance ..........................................................................
  getAllVigilance():Observable<IVigilance[]>{
    return this.httpClient.get<IVigilance[]>(this.host+'/vigilance');
  }
  addVigilance(item:IVigilance):Observable<IVigilance>{
    return this.httpClient.post<IVigilance>(this.host+'/vigilance',item);
  }
  updateVigilance(item:IVigilance):Observable<IVigilance>{
    return this.httpClient.put<IVigilance>(this.host+'/vigilance/'+item.id,item);
  }
  deleteVigilance(item:IVigilance):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/vigilance/'+item.id);
  }
  searchByState(keyword:string):Observable<IVigilance[]>{
    return this.httpClient.get<IVigilance[]>(this.host+'/vigilance?etat_like='+keyword);
  }

   // Formations ..........................................................................
   getAllFormation():Observable<IFormation[]>{
    return this.httpClient.get<IFormation[]>(this.host+'/formations');
  }
  addFormation(item:IFormation):Observable<IFormation>{
    return this.httpClient.post<IFormation>(this.host+'/formations',item);
  }
  updateFormation(item:IFormation):Observable<IFormation>{
    return this.httpClient.put<IFormation>(this.host+'/formations/'+item.id,item);
  }
  deleteFormation(item:IFormation):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/formations/'+item.id);
  }

   // Entreprises_formations ............................................................
   getAllEntreprises_formation():Observable<IEntreprisesFormation[]>{
    return this.httpClient.get<IEntreprisesFormation[]>(this.host+'/entreprises_formation');
  }
  addEntreprises_formation(item:IEntreprisesFormation):Observable<IEntreprisesFormation>{
    return this.httpClient.post<IEntreprisesFormation>(this.host+'/entreprises_formation',item);
  }
  updateEntreprises_formation(item:IEntreprisesFormation):Observable<IEntreprisesFormation>{
    return this.httpClient.put<IEntreprisesFormation>(this.host+'/entreprises_formation/'+item.id,item);
  }
  deleteEntreprises_formation(item:IEntreprisesFormation):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/entreprises_formation/'+item.id);
  }

  // Outputs ..............................................................................
  getOutputs():Observable<IOutputs[]>{
    return this.httpClient.get<IOutputs[]>(this.host+'/outputs');
  }
  addOutput(item:IOutputs):Observable<IOutputs>{
    return this.httpClient.post<IOutputs>(this.host+'/outputs',item);
  }
  updateOutput(item:IOutputs):Observable<IOutputs>{
    return this.httpClient.put<IOutputs>(this.host+'/outputs/'+item.id,item);
  }
  deleteOutput(item:IOutputs):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/outputs/'+item.id);
  }

  // Output_equipement ..............................................................
  getOutputEquipement():Observable<IOutputEqupement[]>{
    return this.httpClient.get<IOutputEqupement[]>(this.host+'/output_equipement');
  }
  addOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.httpClient.post<IOutputEqupement>(this.host+'/output_equipement',item);
  }
  updateOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.httpClient.put<IOutputEqupement>(this.host+'/output_equipement/'+item.id,item);
  }
  deleteOutputEquipement(item:IOutputEqupement):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/output_equipement/'+item.id);
  }

   // Output_environnement ..............................................................
   getOutputenvironnement():Observable<IOutputEnvironnement[]>{
    return this.httpClient.get<IOutputEnvironnement[]>(this.host+'/output_environnement');
  }
  addOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.httpClient.post<IOutputEnvironnement>(this.host+'/output_environnement',item);
  }
  updateOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.httpClient.put<IOutputEnvironnement>(this.host+'/output_environnement/'+item.id,item);
  }
  deleteOutputenvironnement(item:IOutputEnvironnement):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.host+'/output_environnement/'+item.id);
  }
  
}
