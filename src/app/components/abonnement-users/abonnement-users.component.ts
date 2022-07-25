import { Component, OnInit } from '@angular/core';
import { AbonnementSearchService } from '../../services/abonnement-search.service';
import  IabonnementSearch  from '../../models/abonnement_users.models';

@Component({
  selector: 'app-abonnement-users',
  templateUrl: './abonnement-users.component.html',
  styleUrls: ['./abonnement-users.component.scss']
})
export class AbonnementUsersComponent implements OnInit {

  arrayAbonnementSearch: IabonnementSearch[] = [];
  searchText:string = "";
  
  constructor(
    private abonnementsearchservice: AbonnementSearchService
  ) { }

  ngOnInit(): void {
    this.getAllAbonnementSearch()
  }


  getAllAbonnementSearch(){
    this.abonnementsearchservice.getAllUserAbonnementSearch().then((data:any) =>{
      this.arrayAbonnementSearch = data;
      console.log(this.arrayAbonnementSearch);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
  }
  onSearch(serachvalue:string){
    this.searchText = serachvalue;
  }

}
