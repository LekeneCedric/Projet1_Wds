import { Component, OnInit } from '@angular/core';
import IVigilance from 'src/app/models/vigilance.models';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-vigilance',
  templateUrl: './vigilance.component.html',
  styleUrls: ['./vigilance.component.scss']
})
export class VigilanceComponent implements OnInit {

  vigilances!:IVigilance[];
  constructor(
    private dataService:DataServiceService,
  ) { }

  ngOnInit(): void {
    this.dataService.getAllVigilance()
    .subscribe(
      (data)=>{
        console.log(data);
        this.vigilances = data;
        console.log(this.vigilances);
      }
    )
  }

}
