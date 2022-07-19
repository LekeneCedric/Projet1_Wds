import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import IFormation from 'src/app/models/formations.models';
import IOutputs from 'src/app/models/outputs.models';
import PageOutPuts from 'src/app/models/pageOutput.models';
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
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 10;
  totalPages:number = 0;
  selected:number = 10;

  constructor(
    private outputsService:OutputsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onGetAllOutput();

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
    if(this.selected != -1 || this.selected < this.outputs.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.outputs.length;
    }
    this.onGetAllOutput();
	}



  onGetAllOutput(): void {
    this.outputsService.getOutputs()
    .subscribe(
      (data)=>{
        this.outputs = data;
        this.onGetPageOutput();
      }
    )
  }

  onGetPageOutput(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.outputs = data.outputs;
        this.totalPages = data.totalPages;


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
        this.onGetAllOutput();
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

  onEditOutput(item:IOutputs):void{

    if(item.id ){

      this.outputsService.getOutputById(item.id)
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

  getPage(page:number,size:number):Observable<PageOutPuts>{
  
    let index = page * size;
    let totalPages = ~~(this.outputs.length/size);
    if(this.outputs.length % size != 0)
      totalPages ++;
    let pageEquipements = this.outputs.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      outputs:pageEquipements
    })
  }


  onEdit(){
    if(this.currentId)
   
    this.outputsService.updateOutput(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        alert('Update Succes');
        this.onGetAllOutput();
        
      },err=> console.log('error',err)
    )
}

gotoPage(i:number){
  this.currentPage = i;
  console.log(i);
  this.onGetAllOutput();
}

onLink(){

}
}
