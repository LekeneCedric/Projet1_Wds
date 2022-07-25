import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iprestataire from '../models/prestataire.model';


@Injectable({
  providedIn: 'root'
})
export class PretataireService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPrestatires(){
    return new Promise((resolve, reject) => {
     return this.http.get<Iprestataire[]>(`${environment.host}/relation`)
     .subscribe({
       next: res => {
         resolve(res);
       },
       error: err => {
         reject(err)
       }
     });
    })
   }
}
