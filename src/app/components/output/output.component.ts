import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import IFormation from 'src/app/models/formations.models';
import IOutputs from 'src/app/models/outputs.models';
import { OutputsService } from 'src/app/services/outputs.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  outputs!:IOutputs[];
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";

  constructor(
    private outputsService:OutputsService,
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




  onGetAllOutput(): void {
    this.outputsService.getOutputs()
    .subscribe(
      (data)=>{
        this.outputs = data;
      }
    )
  }

  onAddOutput():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.outputsService.addOutput(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )
      
  }


  onSearch():void{

  }

  onDeleteOutput(item:IOutputs):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.outputsService.deleteOutput(item)
      .subscribe(
        (data)=>{
          this.onGetAllOutput();
        }
      )

    }
  }

  onUpdateOutput(item:IOutputs):void{
    this.outputsService.updateOutput(item)
    .subscribe(
      (data)=>{
        alert('Edit Success');
      },(err)=> console.log('error',err) 
    )

  }


}
