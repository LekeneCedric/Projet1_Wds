import { Component, OnInit } from '@angular/core';
import IHabitation from 'src/app/models/habitation.models';
import { HabitationsService } from 'src/app/services/habitations.service';

@Component({
  selector: 'app-habitations',
  templateUrl: './habitations.component.html',
  styleUrls: ['./habitations.component.scss']
})
export class HabitationsComponent implements OnInit {

  constructor(private service:HabitationsService) { }
  habitations:IHabitation[]=[];
  intitule_habitation:String ="";
  new_habitation:IHabitation = {intitule:String(this.intitule_habitation),created_at:new Date(),updated_at:new Date()}
  search:string = ""
  ngOnInit(): void {
    this.service.getAllHabitations().subscribe(data=>{
      this.habitations = data;
    })
  }
  addHabitation(){
    console.log(this.new_habitation)
    this.service.addHabitation(this.new_habitation).subscribe(data=>{
      console.log(data);
    })
    this.ngOnInit();
  }

}
