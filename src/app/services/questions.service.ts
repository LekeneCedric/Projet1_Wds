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


 getAllQuestions():Observable<IQuestion[]>{
  return this.http.get<IQuestion[]>(`${environment.host}/questions`);
 }
}
