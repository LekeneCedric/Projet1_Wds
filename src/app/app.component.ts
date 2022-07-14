import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IHabitation from './models/habitation.models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet1_wds';
  habitation : IHabitation = 
  {
      id: 32,
      intitule: "test,test,test",
      created_at: new Date("2022-07-13T18:37:47.000000Z"),
      updated_at: new Date("2022-07-13T18:37:47.000000Z")
  }
  constructor(private http:HttpClient,private api:ApiService){

  }
 async ngOnInit(){
  //await this.api.deleteHabitation(this.habitation).subscribe(data=>{ console.log(data);} ,error=>{console.log(`Erreur: ${error.message}`)})
    //  await this.api.getHabitations().subscribe(data=>{
    //     console.log(data);
    //   });
    // await  this.api.postHabitation(this.habitation).subscribe(data=>{ console.log(data); });
    //  await this.api.getHabitations().subscribe(data=>{
    //     console.log(data);
    //   });

  }
}
