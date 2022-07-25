import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iabonnement from '../models/abonnements.models';


@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(
    private http:HttpClient
  ) { }

  getAllAbonnements(){
    return new Promise((resolve, reject) => {
     return this.http.get<Iabonnement[]>(`${environment.host}/abonnements`)
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

   addAbonnement(item:Iabonnement){
    return new Promise((resolve, reject) => {
      return this.http.post<Iabonnement>(`${environment.host}/abonnements`,item)
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

   updateAbonnement(item:Iabonnement){
    return new Promise((resolve, reject) => {
     this.http.put<Iabonnement>(`${environment.host}/abonnements/${item.id}`,item)
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

  deleteAbonnement(id:number){
     return new Promise((resolve, reject) => {
       return this.http.delete<Iabonnement>(`${environment.host}/abonnements/${id}`)
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
