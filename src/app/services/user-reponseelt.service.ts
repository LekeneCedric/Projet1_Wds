import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iuser_reponseelt from '../models/user_reonseelt_historique';


@Injectable({
  providedIn: 'root'
})
export class UserReponseeltService {

  constructor(
    private http:HttpClient
  ) { }

  getAllUserReponseelt(id:number){
    return new Promise((resolve, reject) => {
     return this.http.get<Iuser_reponseelt[]>(`${environment.host}/user_reponseelt/historiques/${id}`)
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
