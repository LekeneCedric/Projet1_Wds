import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projet1_wds';
  constructor(
    private dataService: DataServiceService){

  }
  ngOnInit(): void {
      this.dataService.getOutputenvironnement()
      .subscribe(data=> console.log(data))
  }
}
