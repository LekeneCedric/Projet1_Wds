import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IHabitation from '../models/habitation.models';
import {environment} from '../../environments/environment';
import ICategorie from '../models/categorie.models';
import IEquipement from '../models/equipement.models';
import IProposition from '../models/proposition.models';
import ITypeEquipement from '../models/typeequipement.models';
import IQuestion from '../models/question.models';
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

  getEquipements():Observable<IEquipement[]>{
    return this.http.get<IEquipement[]>(`${environment.host}/questionselt/equipement`);
  }
  getTypeEquipement():Observable<ITypeEquipement[]>{
    return this.http.get<ITypeEquipement[]>(`${environment.host}/questionselt/equipement/search`);
  }
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

}
