import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IQuestion from '../models/question.models';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }


 getAllQuestions():Observable<any>{
  return this.http.get<any>(`${environment.host}/questions`);
 }
 postQuestion(question: IQuestion):Observable<any>{
   return this.http.post<any>(`${environment.host}/questions`,question);
 }
 deleteQuestion(id:number):Observable<any>{
  return this.http.delete<any>(`${environment.host}/questions/${id}`);
 }
 updateQuestion(item:IQuestion):Observable<any>{
  return this.http.put<IQuestion>(`${environment.host}/questions/${item.id}`, item); 
}
}
