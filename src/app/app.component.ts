import { Component, OnInit } from '@angular/core';
import { VigilanceService } from './services/vigilance.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   
  ngOnInit(): void {
    this.vigilanceService.getAllVigilance()
    .subscribe(data => console.log(data));
   }


   constructor(
    private vigilanceService : VigilanceService,

   ){
    
   }
}
