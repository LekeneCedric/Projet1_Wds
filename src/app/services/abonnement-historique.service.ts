import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iabonnement_historique from '../models/abonnement_historique';


@Injectable({
  providedIn: 'root'
})
export class AbonnementHistoriqueService {

  constructor(
    private http:HttpClient
  ) { }

  getAllAbonnement_Historique(id:number){
    return new Promise((resolve, reject) => {
     return this.http.get<Iabonnement_historique[]>(`${environment.host}abonnements/historique/${id}`)
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
