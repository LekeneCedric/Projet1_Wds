import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import  IabonnementSearch from '../models/abonnement_users.models';
import IabonnementSend from '../models/abonnement_send.model';

@Injectable({
  providedIn: 'root'
})
export class AbonnementSearchService {

  constructor(
    private http:HttpClient
  ) { }

  getAllUserAbonnementSearch(){
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
     return this.http.get<IabonnementSearch[]>(`${environment.host}abonnement_users`)
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

   getOnUserAbonnement(id:number){
    return new Promise((resolve, reject) => {
     return this.http.get<IabonnementSearch>(`${environment.host}abonnement_users/${id}`)
=======
     return this.http.get<IabonnementSearch[]>(`${environment.host}/abonnement_users/search`)
>>>>>>> 9bcb49e18f121e459b62134dbfa1287fe4c17e1d
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


   sendAbonnement(item:IabonnementSend){
    return new Promise((resolve, reject) => {
      return this.http.post<IabonnementSend>(`${environment.host}abonnement_users/search`,item)
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
