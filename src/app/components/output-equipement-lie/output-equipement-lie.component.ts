import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IEquipement from 'src/app/models/equipement.models';
import IEquipementLie from 'src/app/models/equipement_lie.models';
import { EquipementsService } from 'src/app/services/equipements.service';
import { OutputsService } from 'src/app/services/outputs.service';

@Component({
  selector: 'app-output-equipement-lie',
  templateUrl: './output-equipement-lie.component.html',
  styleUrls: ['./output-equipement-lie.component.scss']
})
export class OutputEquipementLieComponent implements OnInit {

  equipements!: IEquipement[];
  equipementsALies: IEquipementLie[] = [];
  search:string = '';
  currentId: number = -1;
  constructor(
    private equipementsService: EquipementsService,
    private activatedRoute: ActivatedRoute,
    private outputsService : OutputsService,
    
  ) { 
    this.getLinkedEqupment();
  }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params['id'];
    console.log(this.currentId);
  }


getLinkedEqupment():void{
  this.equipementsService.getAllEquipements()
    .subscribe(
      (data)=>{
        this.equipements = data;
        this.equipements.forEach(
          (equip)=>{
            if(equip.choix)
            this.equipementsALies.push({ id:equip.id,choix:equip.choix,liable:true,deja_lie:false});
            console.log(this.equipementsALies);
           }
        )
      },err => console.log('error',err)
    )
}

hello(item:IEquipementLie){
  item.liable = !item.liable;
  console.log(item);  
  
}

linkOutputToEquipement(){
  const idArr:number[] = [];
  const EquipementPourLiasonArr = this.equipementsALies.filter(
    (equip)=>{
        return equip.liable == false;
    }
  )
  EquipementPourLiasonArr.forEach(
    (item)=>{
      if(item.id)
      idArr.push(item.id);
    }
  )
  console.log(idArr);
  this.outputsService.linkToEquipement(this.currentId,idArr)
  .subscribe(
    (data)=>{
      alert(data.message);
      console.log(data);
      this.equipementsALies.forEach(
        (equip,index)=>{

        }
      )
    },(err)=> console.log('error',err)
  )
}

}

