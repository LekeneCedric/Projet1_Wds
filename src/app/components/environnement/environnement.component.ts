import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import PageEnvironnement from 'src/app/models/modelsPages/PageEnvironnement.models';
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
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 10;
  totalPages:number = 0;
  selected:number = 10;

  constructor(
    private environnementService : EnvironnementService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onGetAllEnvironnement();

    this.formGroup = this.fb.group({
      titre:["",Validators.required],
      classement:["",Validators.required],
      standard:["",Validators.required],
      livrable:["",Validators.required],
      validite:["",Validators.required],
      delai:["",Validators.required],
      cout_etude:["",Validators.required],
      frais_admin:["",Validators.required],
      penalite:["",Validators.required],
      ispayer:[true,Validators.required],
      isenvironnement:[true,Validators.required],
      isdate:[true,Validators.required],
      periode:[""],
      frequence:[""],
      isrelation:[true,Validators.required],
      ordre:[0,Validators.required],

    });

    this.formGroup2 = this.formGroup;
  }

  get titre(){return this.formGroup.get('titre');}
  get classement(){return this.formGroup.get('classement');}
  get standard(){return this.formGroup.get('standard');}
  get livrable(){return this.formGroup.get('livrable');}
  get validite(){return this.formGroup.get('validite');}
  get delai(){return this.formGroup.get('delai');}
  get cout_etude(){return this.formGroup.get('cout_etude');}
  get frais_admin(){return this.formGroup.get('frais_admin');}
  get penalite(){return this.formGroup.get('penalite');}
  get ispayer(){return this.formGroup.get('ispayer');}
  get isenvironnement(){return this.formGroup.get('isenvironnement');}
  get isdate(){return this.formGroup.get('isdate');}
  get periode(){return this.formGroup.get('periode');}
  get frequence(){return this.formGroup.get('frequence');}
  get isrelation(){return this.formGroup.get('isrelation');}
  get ordre(){return this.formGroup.get('ordre');}
  get created_at(){return this.formGroup.get('created_at');}
  get updated_at(){return this.formGroup.get('updated_at');}

  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.environnements.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.environnements.length;
    }
    this.onGetAllEnvironnement();
	}




  onGetAllEnvironnement(): void {
    this.environnementService.getOutputenvironnement()
    .subscribe(
      (data)=>{
        this.environnements = data;
        this.onGetPageEnvironnement();
      }
    )
  }

  onGetPageEnvironnement(){
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.environnements = data.environnements;
        this.totalPages = data.totalPages;


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
        this.onGetAllEnvironnement();
      },(err)=> console.log('error',err)
    )
      
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

  // onEditEnvironnement(item:IOutputEnvironnement):void{

  //   if(item.id ){

  //     this.environnementService.getEnvironnementById(item.id)
  //     .subscribe(
  //       (data)=> {

  //         console.log(data);
  //         this.currentId = item.id;
  //         this.formGroup2 = this.fb.group({
  //           // titre:[data['titre'],Validators.required],
  //           // classement:[data['classement'],Validators.required],
  //           // standard:[data['standard'],Validators.required],
  //           // livrable:[data['livrable'],Validators.required],
  //           // validite:[data['validite'],Validators.required],
  //           // delai:[data['delai'],Validators.required],
  //           // cout_etude:[data['cout_etude'],Validators.required],
  //           // frais_admin:[data['frais_admin'],Validators.required],
  //           // penalite:[data['penalite'],Validators.required],
  //           // ispayer:[data['ispayer'],Validators.required],
  //           // isenvironnement:[data['isenvironnement'],Validators.required],
  //           // isdate:[data['isdate'],Validators.required],
  //           // periode:[data['periode']],
  //           // frequence:[data['frequence']],
  //           // isrelation:[data['isrelation'],Validators.required],
  //           // ordre:[data['ordre'],Validators.required],

  //         })
  //       }
  //     )    
  // }
  // }
 
  onEditEnvironnement(item:IOutputEnvironnement):void{

    if(item.id ){

      this.environnementService.getEnvironnementById(item.id)
      .subscribe(
        (data)=> {

          console.log(data);
          this.currentId = item.id;
          this.formGroup2 = this.fb.group({
            titre:[data['titre'],Validators.required],
            classement:[data['classement'],Validators.required],
            standard:[data['standard'],Validators.required],
            livrable:[data['livrable'],Validators.required],
            validite:[data['validite'],Validators.required],
            delai:[data['delai'],Validators.required],
            cout_etude:[data['cout_etude'],Validators.required],
            frais_admin:[data['frais_admin'],Validators.required],
            penalite:[data['penalite'],Validators.required],
            ispayer:[data['ispayer'],Validators.required],
            isenvironnement:[data['isenvironnement'],Validators.required],
            isdate:[data['isdate'],Validators.required],
            periode:[data['periode']],
            frequence:[data['frequence']],
            isrelation:[data['isrelation'],Validators.required],
            ordre:[data['ordre'],Validators.required],

          })
        }
      )    
  }
  }

  getPage(page:number,size:number):Observable<PageEnvironnement>{
  
    let index = page * size;
    let totalPages = ~~(this.environnements.length/size);
    if(this.environnements.length % size != 0)
      totalPages ++;
    let pageEquipements = this.environnements.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      environnements:pageEquipements
    })
  }


  onEdit(){
    if(this.currentId)
   
    this.environnementService.updateOutputenvironnement(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        alert('Update Succes');
        this.onGetAllEnvironnement();

      },err=> console.log('error',err)
    )
}

gotoPage(i:number){
  this.currentPage = i;
  console.log(i);
  this.onGetAllEnvironnement();
}


}


