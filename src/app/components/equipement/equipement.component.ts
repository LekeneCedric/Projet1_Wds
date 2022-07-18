import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import IOutputEquipement from 'src/app/models/output_equipement.models';
import PageEquipement from 'src/app/models/pageEquipement.models';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {

  equipements!:IOutputEquipement[];
  formGroup!: FormGroup;
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 5;
  totalPages:number = 0;

  constructor(
    private equipementService : EquipementService,
    private fb: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.onGetAllEquipement();

    this.formGroup = this.fb.group({
      type:["",Validators.required],
      moment_frequence:["",Validators.required],
      personne_organisme:["",Validators.required],
      reference:["",Validators.required],
    });

    this.formGroup2 = this.formGroup;
  }

  get type(){return this.formGroup.get('type');}

  get moment_frequence(){return this.formGroup.get('moment_frequence');}

  get personne_organisme(){return this.formGroup.get('personne_organisme');}

  get reference(){return this.formGroup.get('reference');}

  get created_at(){return this.formGroup.get('created_at');}

  get updated_at(){return this.formGroup.get('updated_at');}






  onGetAllEquipement(): void {
    this.equipementService.getOutputEquipement()
    .subscribe(
      (data)=>{
        this.equipements = data;
        
        this.onGetPageEquipement();
      }
    )
  }

  onGetPageEquipement(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.equipements = data.equipements;
        this.totalPages = data.totalPages;


      }
    )
  }

  onAddEquipement():void{
    this.submitted = true;
    if(this.formGroup.invalid){
      alert('Invalid Form');
      return;
    } 
    this.equipementService.addOutputEquipement(this.formGroup.value)
    .subscribe(
      (data)=>{
        alert('Add Success');
        this.onGetAllEquipement();
      },(err)=> console.log('error',err)
    )
      
  }


  onSearch():void{

  }

  onDeleteEquipement(item:IOutputEquipement):void{
    let conf = confirm('Etes vous sur?');
    if(conf){
      this.equipementService.deleteOutputEquipement(item)
      .subscribe(
        (data)=>{
          this.onGetAllEquipement();
        }
      )

    }
  }

  onEditEquipement(item:IOutputEquipement):void{

    if(item.id ){

      this.equipementService.getOutputEquipementById(item.id)
      .subscribe(
        (data)=> {

          console.log(data);
          this.currentId = item.id;
          this.formGroup2 = this.fb.group({
            type:[data['type'],Validators.required],
            moment_frequence:[data['moment_frequence'],Validators.required],
            personne_organisme:[data['personne_organisme'],Validators.required],
            reference:[data['reference'],Validators.required],

          })
        }
      )    
  }
  }

  getPage(page:number,size:number):Observable<PageEquipement>{
  
    let index = page * size;
    let totalPages = ~~(this.equipements.length/size);
    if(this.equipements.length % size != 0)
      totalPages ++;
    let pageEquipements = this.equipements.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      equipements:pageEquipements
    })
  }

  onEdit(){
    if(this.currentId)
   
    this.equipementService.updateOutputEquipement(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        alert('Update Succes');
      },err=> console.log('error',err)
    )
}

gotoPage(i:number){
  this.currentPage = i;
  console.log(i);
  this.onGetAllEquipement();
}

}
