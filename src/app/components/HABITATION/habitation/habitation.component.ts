import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IHabitation from 'src/app/models/habitation.models';
import { HabitationsService } from 'src/app/services/habitations.service';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _route:Router, private service:HabitationsService) { }
  habitation?:IHabitation
  id:number = 0;
  displayStyle = "none";
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getOneHabitation(this.id).subscribe(data=>{
        this.habitation = data;
    })
  }
  deleteHabitation():void {
  this.service.deleteHabitation(this.id).subscribe(data=>{});
  this.displayStyle = "none";
  this._route.navigateByUrl('/habitations'); /*Diriger vers le menu habitation apres la suppression d'une habitation */
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
