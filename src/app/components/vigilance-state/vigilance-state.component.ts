import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IVigilance from 'src/app/models/vigilance.models';
import { VigilanceService } from 'src/app/services/vigilance.service';

@Component({
  selector: 'app-vigilance-state',
  templateUrl: './vigilance-state.component.html',
  styleUrls: ['./vigilance-state.component.scss']
})
export class VigilanceStateComponent implements OnInit {

  etat!:string;
  vigilances!: IVigilance[];
  constructor(
    private vigilanceService : VigilanceService,
    private activatedRoute: ActivatedRoute,
    

  ) {
    
    
   this.activatedRoute.url.subscribe(url => {
    let arr = url.toString().split(',');
    this.etat = arr[arr.length - 1];
})
  }

  ngOnInit(): void {
    this.vigilanceService.searchByState(this.etat)
    .subscribe(
      (data)=>{
        this.vigilances = data;
      },err => console.log('error',err)
    )
  }

}
