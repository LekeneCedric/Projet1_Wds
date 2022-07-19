import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iconseil from '../models/conseils.models';

@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  constructor(
    private http:HttpClient
  ) { }

    // HTTP REQUEST FOR CONSEIL
    getAllConseils(){
     // return this.http.get<Iconseil[]>(`${environment.host}conseil`);
     return new Promise((resolve, reject) => {
      return this.http.get<Iconseil[]>(`${environment.host}/conseil`)
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

    getConseil(id:number):Observable<Iconseil>{
      return this.http.get<Iconseil>(`${environment.host}/conseil/${id}`);
     }

     addConseil(item:Iconseil){
      // return this.http.post<Iconseil>(`${environment.host}conseil`,item);
      return new Promise((resolve, reject) => {
        return this.http.post<Iconseil>(`${environment.host}/conseil`,item)
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

     updateConseil(item:Iconseil){
       return new Promise((resolve, reject) => {
        this.http.put<Iconseil>(`${environment.host}/conseil/${item.id}`,item)
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
     
     deleteConseil(id:number){
       // return this.http.delete<Iconseil>(`${environment.host}conseil/${id}`);
        return new Promise((resolve, reject) => {
          return this.http.delete<Iconseil>(`${environment.host}/conseil/${id}`)
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
