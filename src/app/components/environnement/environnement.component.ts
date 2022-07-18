import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import IOutputEnvironnement from 'src/app/models/output_environnement.models';
import { EnvironnementService } from 'src/app/services/environnement.service';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrls: ['./environnement.component.scss']
})
export class EnvironnementComponent implements OnInit {

  environnements!:IOutputEnvironnement[];
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";

  constructor(
    private environnementService : EnvironnementService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  get titre(){return this.formGroup.get('titre');}

  get but(){return this.formGroup.get('but');}

  get moment_faire(){return this.formGroup.get('moment_faire');}

  get qui_faire(){return this.formGroup.get('qui_faire');}

  get conseil(){return this.formGroup.get('conseil');}

  get document(){return this.formGroup.get('document');}

  get etat(){return this.formGroup.get('etat');}




  onGetAllEnvironnement(): void {
    this.environnementService.getOutputenvironnement()
    .subscribe(
      (data)=>{
        this.environnements = data;
      }
    )
  }

  onAddEnvironnement():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.environnementService.addOutputenvironnement(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )
      
  }


  onSearch():void{

  }

  onDeleteEnvironnement(item:IOutputEnvironnement):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.environnementService.deleteOutputenvironnement(item)
      .subscribe(
        (data)=>{
          this.onGetAllEnvironnement();
        }
      )

    }
  }

  onUpdateEnvironnement(item:IOutputEnvironnement):void{
    this.environnementService.updateOutputenvironnement(item)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      },(err)=> console.log('error',err) 
    )

  }
}
