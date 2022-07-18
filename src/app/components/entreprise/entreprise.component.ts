import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import IEntreprisesFormation from 'src/app/models/entreprises_formations.models';
import { EntreprisesService } from 'src/app/services/entreprises.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  entreprises!: IEntreprisesFormation[];
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";

  constructor(
    private entreprisesService:EntreprisesService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.
  }

  
  onGetAllEntreprise(): void {
    this.entreprisesService.getAllEntreprises_formation()
    .subscribe(
      (data)=>{
        this.entreprises = data;
      }
    )
  }

  onAddEntreprise():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.entreprisesService.addEntreprises_formation(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )
      
  }


  onSearch():void{

  }

  onDeleteEntreprise(item:IEntreprisesFormation):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.entreprisesService.deleteEntreprises_formation(item)
      .subscribe(
        (data)=>{
          this.onGetAllEntreprise();
        }
      )

    }
  }

  onUpdateEntreprise(item:IEntreprisesFormation):void{
    this.entreprisesService.updateEntreprises_formation(item)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      },(err)=> console.log('error',err) 
    )

  }

}
