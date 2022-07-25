import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import  IabonnementSearch from '../models/abonnement_users.models';


@Injectable({
  providedIn: 'root'
})
export class AbonnementSearchService {

  constructor(
    private http:HttpClient
  ) { }

  getAllUserAbonnementSearch(){
    return new Promise((resolve, reject) => {
     return this.http.get<IabonnementSearch[]>(`${environment.host}/abonnement_users/search`)
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
