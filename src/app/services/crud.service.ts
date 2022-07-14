import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Abonnement from '../models/abonnement_users.models';
import Iabonnement from '../models/abonnements.models';
import Iconseil from '../models/conseils.models';
import Irelation from '../models/relations.models';
import Iuser from '../models/users.models';

//import interfaces
@Injectable({
  providedIn: 'root'
})


export class CRUDService {


  constructor(
    private http: HttpClient,
  ) { }

  get():Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>("http://backend.pharmcogroup.net/api/abonnement_users");
  }

  add(body:Abonnement):Observable<Abonnement>{
   return this.http.post<Abonnement>("http://backend.pharmcogroup.net/api/abonnement_users",body);
  }

  update(body:Abonnement):Observable<Abonnement>{

   return  this.http.put<Abonnement>("http://backend.pharmcogroup.net/api/abonnement_users/122",body)
  
  }

  delete(id:number):Observable<Abonnement>{
    return  this.http.delete<Abonnement>("http://backend.pharmcogroup.net/api/abonnement_users/"+id);
  }

  //crud operations for users
  getUsers():Observable<Iuser[]>{
    return this.http.get<Iuser[]>("http://backend.pharmcogroup.net/api/users");
  }
  addUser(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>("http://backend.pharmcogroup.net/api/users", user);
  }
  updateUser(user:Iuser):Observable<Iuser>{
    return this.http.put<Iuser>("http://backend.pharmcogroup.net/api/users/"+ user.id, user);
  }
  deleUser(user:Iuser):Observable<Iuser>{
    return  this.http.delete<Iuser>("http://backend.pharmcogroup.net/api/users/"+ user.id);
  }

  //crud operations for abonnements
  getAbonnements():Observable<Iabonnement[]>{
    return this.http.get<Iabonnement[]>("http://backend.pharmcogroup.net/api/abonnements");
  }
  addAbonnement(abonnement:Iabonnement):Observable<Iabonnement>{
    return this.http.post<Iabonnement>("http://backend.pharmcogroup.net/api/abonnements", abonnement);
  }
  updateAbonnement(abonnement:Iabonnement):Observable<Iabonnement>{
    return this.http.put<Iabonnement>("http://backend.pharmcogroup.net/api/abonnements/"+ abonnement.id, abonnement);
  }
  deleAbonnement(abonnement:Iabonnement):Observable<Iabonnement>{
    return  this.http.delete<Iabonnement>("http://backend.pharmcogroup.net/api/abonnements/"+ abonnement.id);
  }

  //crud operations for conseils
  getConseils():Observable<Iconseil[]>{
    return this.http.get<Iconseil[]>("http://backend.pharmcogroup.net/api/conseil");
  }
  addConseil(conseil:Iconseil):Observable<Iconseil>{
    return this.http.post<Iconseil>("http://backend.pharmcogroup.net/api/conseil", conseil);
  }
  updateConseil(conseil:Iconseil):Observable<Iconseil>{
    return this.http.put<Iconseil>("http://backend.pharmcogroup.net/api/conseil/"+ conseil.id, conseil);
  }
  deleConseil(conseil:Iconseil):Observable<Iconseil>{
    return  this.http.delete<Iconseil>("http://backend.pharmcogroup.net/api/conseil/"+ conseil.id);
  }

  //operation for relations
  getRelations():Observable<Irelation[]>{
    return this.http.get<Irelation[]>("http://backend.pharmcogroup.net/api/relation");
  }
}