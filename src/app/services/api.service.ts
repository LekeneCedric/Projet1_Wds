import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IHabitation from '../models/habitation.models';
import {environment} from '../../environments/environment';
import ICategorie from '../models/categorie.models';
import IEquipement from '../models/equipement.models';
import IProposition from '../models/proposition.models';
import IQuestion from '../models/question.models';
import IVigilance from '../models/vigilance.models';
import IFormation from '../models/formations.models';
import IEntreprisesFormation from '../models/entreprises_formations.models';
import IOutputs from '../models/outputs.models';
import IOutputEqupement from '../models/output_equipement.models';
import IOutputEnvironnement from '../models/output_environnement.models';
import ITypequestion from '../models/typequestion.models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // HTTP REQUEST FOR HABITATIONS 
  getHabitations():Observable<IHabitation[]>{
    return this.http.get<IHabitation[]>(`${environment.host}/habitations`);
  }
  getHabitation(item:IHabitation):Observable<IHabitation>{
   return this.http.get<IHabitation>(`${environment.host}/habitations/${item.id}`);
  }
  postHabitation(item:IHabitation):Observable<IHabitation>{
    return this.http.post<IHabitation>(`${environment.host}/habitations`,item);
  }
  updateHabitation(item:IHabitation):Observable<IHabitation>{
    return this.http.put<IHabitation>(`${environment.host}/habitations/${item.id}`,item);
  }
  deleteHabitation(item:IHabitation):Observable<IHabitation>{
     return this.http.delete<IHabitation>(`${environment.host}/habitations/${item.id}`);
  }

  // HTTP REQUEST FOR TYPEQUESTION
  getTypeQuestions():Observable<ITypequestion[]>{
    return this.http.get<ITypequestion[]>(`${environment.host}/types`);
  }
  getTypeQuestion(item: ITypequestion):Observable<ITypequestion>{
    return this.http.get<ITypequestion>(`${environment.host}/types/${item.id}`);
  }
  postTypeQuestion(item: ITypequestion):Observable<ITypequestion>{
    return this.http.post<ITypequestion>(`${environment.host}/types`,item);
  }
  updateTypeQuestion(item: ITypequestion):Observable<ITypequestion>{
    return this.http.put<ITypequestion>(`${environment.host}/types/${item.id}`,item);
  }
  deleteTypeQuestion(item: ITypequestion):Observable<any>{
    return this.http.delete<ITypequestion>(`${environment.host}/types/${item.id}`);
  }

  
  // HTTP REQUEST FOR CATEGORIE
  
  getCategories():Observable<ICategorie[]>{
    return this.http.get<ICategorie[]>(`${environment.host}/categories`);
  }
  postCategorie(item:ICategorie):Observable<ICategorie>{
    return this.http.post<ICategorie>(`${environment.host}/categories`,item);
  }
  updateCategorie(item:ICategorie):Observable<ICategorie>{
    return this.http.put<ICategorie>(`${environment.host}/categories/${item.id}`, item);
  }
  deleteCategorie(item:ICategorie):Observable<ICategorie>{ 
    return this.http.delete<ICategorie>(`${environment.host}/categories/${item.id}`);
  }

  // HTTP REQUEST FOR EQUIPEMENT AND TYPE

  // postEquipement(item:IEquipement):Observable<IEquipement>{
  //  return this.http.post<IEquipement>(`${environment.host}/categories`, item);
  // }
  // updateEquipement(item:IEquipement):Observable<IEquipement>{
  //   return this.http.put<IEquipement>(`${environment.host}/categories/${item.id}`, item);
  // }
  // deleteEquipement(item:IEquipement):Observable<IEquipement>{
  //   return this.http.delete<IEquipement>(`${environment.host}/categories/${item.id}`);
  // }

  // HTTP REQUEST FOR PROPOSITION

  // Recuperer plusieurs propositions
  getPropositions():Observable<IProposition[]>{
    return this.http.get<IProposition[]>(`${environment.host}/propositions`);
  }
  // Recuperer une seule proposition
  getProposition(item:IProposition):Observable<IProposition>{
    return this.http.get<IProposition>(`${environment.host}/propositions/${item.id}`);
  }
  postProposition(item:IProposition):Observable<IProposition>{
  return this.http.post<IProposition>(`${environment.host}/propositions`,item);
  }
  updateProposition(item:IProposition):Observable<IProposition>{
    return this.http.put<IProposition>(`${environment.host}/propositions/${item.id}`, item);
  }
  deleteProposition(item:IProposition):Observable<IProposition>{
    return this.http.delete<IProposition>(`${environment.host}/propositions/${item.id}`);
  }

// HTTP REQUEST FOR QUESTIONS

 getQuestions():Observable<IQuestion[]>{
  return this.http.get<IQuestion[]>(`${environment.host}/questions`);
 }
  // Vigilance ..........................................................................
  getAllVigilance():Observable<IVigilance[]>{
    return this.http.get<IVigilance[]>(environment.host+'/vigilance');
  }
  addVigilance(item:IVigilance):Observable<IVigilance>{
    return this.http.post<IVigilance>(environment.host+'/vigilance',item);
  }
  updateVigilance(item:IVigilance):Observable<IVigilance>{
    return this.http.put<IVigilance>(environment.host+'/vigilance/'+item.id,item);
  }
  deleteVigilance(item:IVigilance):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/vigilance/'+item.id);
  }
  searchByState(keyword:string):Observable<IVigilance[]>{
    return this.http.get<IVigilance[]>(environment.host+'/vigilance?etat_like='+keyword);
  }

   // Formations ..........................................................................
   getAllFormation():Observable<IFormation[]>{
    return this.http.get<IFormation[]>(environment.host+'/formations');
  }
  addFormation(item:IFormation):Observable<IFormation>{
    return this.http.post<IFormation>(environment.host+'/formations',item);
  }
  updateFormation(item:IFormation):Observable<IFormation>{
    return this.http.put<IFormation>(environment.host+'/formations/'+item.id,item);
  }
  deleteFormation(item:IFormation):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/formations/'+item.id);
  }

   // Entreprises_formations ............................................................
   getAllEntreprises_formation():Observable<IEntreprisesFormation[]>{
    return this.http.get<IEntreprisesFormation[]>(environment.host+'/entreprises_formation');
  }
  addEntreprises_formation(item:IEntreprisesFormation):Observable<IEntreprisesFormation>{
    return this.http.post<IEntreprisesFormation>(environment.host+'/entreprises_formation',item);
  }
  updateEntreprises_formation(item:IEntreprisesFormation):Observable<IEntreprisesFormation>{
    return this.http.put<IEntreprisesFormation>(environment.host+'/entreprises_formation/'+item.id,item);
  }
  deleteEntreprises_formation(item:IEntreprisesFormation):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/entreprises_formation/'+item.id);
  }

  // Outputs ..............................................................................
  getOutputs():Observable<IOutputs[]>{
    return this.http.get<IOutputs[]>(environment.host+'/outputs');
  }
  addOutput(item:IOutputs):Observable<IOutputs>{
    return this.http.post<IOutputs>(environment.host+'/outputs',item);
  }
  updateOutput(item:IOutputs):Observable<IOutputs>{
    return this.http.put<IOutputs>(environment.host+'/outputs/'+item.id,item);
  }
  deleteOutput(item:IOutputs):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/outputs/'+item.id);
  }

  // Output_equipement ..............................................................
  getOutputEquipement():Observable<IOutputEqupement[]>{
    return this.http.get<IOutputEqupement[]>(environment.host+'/output_equipement');
  }
  addOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.http.post<IOutputEqupement>(environment.host+'/output_equipement',item);
  }
  updateOutputEquipement(item:IOutputEqupement):Observable<IOutputEqupement>{
    return this.http.put<IOutputEqupement>(environment.host+'/output_equipement/'+item.id,item);
  }
  deleteOutputEquipement(item:IOutputEqupement):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/output_equipement/'+item.id);
  }

   // Output_environnement ..............................................................
   getOutputenvironnement():Observable<IOutputEnvironnement[]>{
    return this.http.get<IOutputEnvironnement[]>(environment.host+'/output_environnement');
  }
  addOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.http.post<IOutputEnvironnement>(environment.host+'/output_environnement',item);
  }
  updateOutputenvironnement(item:IOutputEnvironnement):Observable<IOutputEnvironnement>{
    return this.http.put<IOutputEnvironnement>(environment.host+'/output_environnement/'+item.id,item);
  }
  deleteOutputenvironnement(item:IOutputEnvironnement):Observable<boolean>{
    return this.http.delete<boolean>(environment.host+'/output_environnement/'+item.id);
  }
}
