import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Iuser from '../models/users.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      return this.http.get<Iuser[]>(`${environment.host}/users`)
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
