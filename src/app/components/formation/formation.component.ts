import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import IFormation from 'src/app/models/formations.models';
import { FormationsService } from 'src/app/services/formations.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations!:IFormation[];
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";

  constructor(
    private formationsService:FormationsService,
    private fb:FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.onGetAllFormation();

  }

  get titre(){return this.formGroup.get('titre');}

  get but(){return this.formGroup.get('but');}

  get moment_faire(){return this.formGroup.get('moment_faire');}

  get qui_faire(){return this.formGroup.get('qui_faire');}

  get conseil(){return this.formGroup.get('conseil');}

  get document(){return this.formGroup.get('document');}

  get etat(){return this.formGroup.get('etat');}




  onGetAllFormation(): void {
    this.formationsService.getAllFormation()
    .subscribe(
      (data)=>{
        this.formations = data;
      }
    )
  }

  onAddFormation():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.formationsService.addFormation(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )
      
  }


  onSearch():void{

  }

  onDeleteFormation(item:IFormation):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.formationsService.deleteFormation(item)
      .subscribe(
        (data)=>{
          this.onGetAllFormation();
        }
      )

    }
  }

  onUpdateFormation(item:IFormation):void{
    this.formationsService.updateFormation(item)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      },(err)=> console.log('error',err) 
    )

  }


}
