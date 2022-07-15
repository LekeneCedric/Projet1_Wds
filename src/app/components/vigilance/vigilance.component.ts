import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IVigilance from 'src/app/models/vigilance.models';
import { VigilanceService } from 'src/app/services/vigilance.service';

@Component({
  selector: 'app-vigilance',
  templateUrl: './vigilance.component.html',
  styleUrls: ['./vigilance.component.scss']
})
export class VigilanceComponent implements OnInit {

  vigilances!:IVigilance[];
  formGroup!: FormGroup;
  submitted:boolean= false;

  constructor(
    private vigilanceService : VigilanceService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onGetAllVigilance();

    this.formGroup = this.fb.group({
      titre:["",Validators.required],
      but:["",Validators.required],
      moment_faire:["",Validators.required],
      qui_faire:["",Validators.required],
      conseil:["",Validators.required],
      document:["",Validators.required],
      etat:["",Validators.required],

    })
  }


  get titre(){return this.formGroup.get('titre');}

  get but(){return this.formGroup.get('but');}

  get moment_faire(){return this.formGroup.get('moment_faire');}

  get qui_faire(){return this.formGroup.get('qui_faire');}

  get conseil(){return this.formGroup.get('conseil');}

  get document(){return this.formGroup.get('document');}

  get etat(){return this.formGroup.get('etat');}




  onGetAllVigilance(): void {
    this.vigilanceService.getAllVigilance()
    .subscribe(
      (data)=>{
        this.vigilances = data;
      }
    )
  }

  onAddVigilance():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.vigilanceService.addVigilance(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
      },(err)=> console.log('error',err)
    )
      
  }

  onSearch(dataForm:any):void{
    this.vigilanceService.searchByState(dataForm.keyword)
    .subscribe(
      (data)=>{this.vigilances = data;},
      (err)=>console.log('error',err)
    )
  }

  onDeleteVigilance(item:IVigilance):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.vigilanceService.deleteVigilance(item)
      .subscribe(
        (data)=>{
          this.onGetAllVigilance();
        }
      )

    }
  }

  

}
