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
   ngOnInit(): void {
   }
   constructor(){
    
   }
}
