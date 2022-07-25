import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ITypequestion from '../models/typequestion.models';

@Injectable({
  providedIn: 'root'
})
export class TypeQuestionsService {

  constructor(private http:HttpClient) { }


  getAllQuestionsType():Observable<ITypequestion[]>{
    return this.http.get<ITypequestion[]>(`${environment.host}/types`);
  }
  getQuestionType(id:number):Observable<ITypequestion>{
    return this.http.get<ITypequestion>(`${environment.host}/types/${id}`);
  }
  postQuestionType(item: ITypequestion):Observable<ITypequestion>{
    return this.http.post<ITypequestion>(`${environment.host}/types`,item);
  }
  updateQuestionType(item: ITypequestion):Observable<ITypequestion>{
    return this.http.put<ITypequestion>(`${environment.host}/types/${item.id}`,item);
  }
  deleteQuestionType(id:number):Observable<any>{
    return this.http.delete<ITypequestion>(`${environment.host}/types/${id}`);
  }
}
