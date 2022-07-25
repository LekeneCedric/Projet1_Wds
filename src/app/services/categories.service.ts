import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ICategorie from '../models/categorie.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
   // HTTP REQUEST FOR CATEGORIE
  // Recuperer plusieurs categories
   getAllCategory():Observable<ICategorie[]>{
    return this.http.get<ICategorie[]>(`${environment.host}/categories`);
  }
  // recuperer une seule categorie
  getOneCategory(id:number):Observable<ICategorie>{
    return this.http.get<ICategorie>(`${environment.host}/categories/${id}`);
  }
  // Ajouter une categorie
  addCategory(item:ICategorie):Observable<any>{
    return this.http.post<ICategorie>(`${environment.host}/categories`,item);
  }
  // Modifier une categorie
  updateCategorie(item:ICategorie):Observable<any>{
    return this.http.put<ICategorie>(`${environment.host}/categories/${item.id}`, item);
  }
  // Suprimer une categorie
  deleteCategorie(id:number):Observable<any>{ 
    return this.http.delete<ICategorie>(`${environment.host}/categories/${id}`);
  }
}
