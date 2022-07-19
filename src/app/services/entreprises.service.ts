import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IEntreprisesFormation from '../models/entreprises_formations.models';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  host:string = environment.host;
  constructor(
    private http:HttpClient,

  ) { }

    // Entreprises_formations ............................................................
    getAllEntreprises_formation():Observable<IEntreprisesFormation[]>{
      return this.http.get<IEntreprisesFormation[]>(this.host+'/entreprises_formation');
    }
    getEntrepriseById(id:number):Observable<IEntreprisesFormation[]>{
      return this.http.get<IEntreprisesFormation[]>(this.host+'/entreprises_formation/'+id);
    }
    addEntreprises_formation(item:IEntreprisesFormation):Observable<IEntreprisesFormation>{
      return this.http.post<IEntreprisesFormation>(this.host+'/entreprises_formation',item);
    }
    updateEntreprises_formation(id:number,nouveau:IEntreprisesFormation):Observable<IEntreprisesFormation>{
      return this.http.put<IEntreprisesFormation>(this.host+'/entreprises_formation/'+id+'?_method=PUT',nouveau);
    }
    deleteEntreprises_formation(item:IEntreprisesFormation):Observable<boolean>{
      return this.http.delete<boolean>(this.host+'/entreprises_formation/'+item.id);
    }
  
}
