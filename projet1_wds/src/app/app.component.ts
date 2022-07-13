import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet1_wds';
  constructor(private http:HttpClient){

  }
  ngOnInit(){
      this.http.get<any>("http://backend.pharmcogroup.net/api/habitations").subscribe(
        res =>{
          console.log(res);
        }
      )
  }
}
