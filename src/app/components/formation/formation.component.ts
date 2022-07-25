import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import IFormation from 'src/app/models/formations.models';
import pageFormation from 'src/app/models/modelsPages/pageFormation.models';
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
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;

  constructor(
    private formationsService:FormationsService,
    private fb:FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.onGetAllFormation();
    
    this.formGroup = this.fb.group({
      equipement:["",Validators.required],
      beneficiaire:["",Validators.required],
      contenu:["",Validators.required],
      document:["",Validators.required],
      formateur:["",Validators.required],
      reference:["",Validators.required],
      isconstruction:false,
      isexploitation:false


    });

    this.formGroup2 = this.formGroup;

  }

  get equipement(){return this.formGroup.get('equipement');}

  get beneficiaire(){return this.formGroup.get('beneficiaire');}

  get contenu(){return this.formGroup.get('contenu');}

  get document(){return this.formGroup.get('document');}

  get formateur(){return this.formGroup.get('formateur');}

  get reference(){return this.formGroup.get('reference');}

  get isconstruction(){return this.formGroup.get('isconstruction');}

  get isexploitation(){return this.formGroup.get('isexploitation');}


  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.formations.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.formations.length;
    }
    this.onGetAllFormation();
	}


  onGetAllFormation(): void {
    this.formationsService.getAllFormation()
    .subscribe(
      (data)=>{
        this.formations = data;
        this.onGetPageFormation();
      }
    )
  }

  onGetPageFormation(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.formations = data.formations;
        this.totalPages = data.totalPages;
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
        this.onGetAllFormation();
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


  onEditFormation(item:IFormation):void{

    if(item.id ){

      this.formationsService.getFormationById(item.id)
      .subscribe(
        (data)=> {
          this.currentId = item.id;
          this.formGroup2 = this.fb.group({
            equipement:[data[0]['equipement'],Validators.required],
            beneficiaire:[data[0]['beneficiaire'],Validators.required],
            contenu:[data[0]['contenu'],Validators.required],
            document:[data[0]['document'],Validators.required],
            formateur:[data[0]['formateur'],Validators.required],
            reference:[data[0]['reference'],Validators.required],
            isconstruction:[data[0]['isconstruction'],Validators.required],
            isexploitation:[data[0]['isexploitation'],Validators.required]
          })
        }
      )    
  }
  }

  getPage(page:number,size:number):Observable<pageFormation>{
  
    let index = page * size;
    let totalPages = ~~(this.formations.length/size);
    if(this.formations.length % size != 0)
      totalPages ++;
    let pageEquipements = this.formations.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      formations:pageEquipements
    })
  }


  onEdit(){
    if(this.currentId)
   
    this.formationsService.updateFormation(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        alert('Update Succes');
        this.onGetAllFormation();
      },err=> console.log('error',err)
    )
}

gotoPage(i:number){
  this.currentPage = i;
  this.onGetAllFormation();
}

}
