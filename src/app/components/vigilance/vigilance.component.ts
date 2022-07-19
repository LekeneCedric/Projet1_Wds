import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import PageVigilance from 'src/app/models/PageVigilance.models';
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
  formGroup2!: FormGroup;
  submitted:boolean= false;
  search:string = "";
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;

  constructor(
    private vigilanceService : VigilanceService,
    private fb:FormBuilder,
    private router:Router,
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

    });

    this.formGroup2 = this.formGroup;

  }


  get titre(){return this.formGroup.get('titre');}

  get but(){return this.formGroup.get('but');}

  get moment_faire(){return this.formGroup.get('moment_faire');}

  get qui_faire(){return this.formGroup.get('qui_faire');}

  get conseil(){return this.formGroup.get('conseil');}

  get document(){return this.formGroup.get('document');}

  get etat(){return this.formGroup.get('etat');}


  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.vigilances.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.vigilances.length;
    }
    this.onGetAllVigilance();
	}

  onGetAllVigilance(): void {
    this.vigilanceService.getAllVigilance()
    .subscribe(
      (data)=>{
        this.vigilances = data;
        this.onGetPageVigilance();
      }
    )
  }

  onGetPageVigilance(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.vigilances = data.vigilances;
        this.totalPages = data.totalPages;


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
    this.vigilanceService.routeByState(dataForm.keyword);
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


  onEditEquipement(item:IVigilance):void{

    if(item.id ){

      this.vigilanceService.getVigilanceById(item.id)
      .subscribe(
        (data)=> {

          
          
          console.log('moi data',data);
          this.currentId = item.id;
          this.formGroup2 = this.fb.group({
            
            titre:[data[0]['titre'],Validators.required],
            but:[data[0]['but'],Validators.required],
            moment_faire:[data[0]['moment_faire'],Validators.required],
            qui_faire:[data[0]['qui_faire'],Validators.required],
            conseil:[data[0]['conseil'],Validators.required],
            document:[data[0]['document'],Validators.required],
            etat:[data[0]['etat'],Validators.required]
          })
        }
      )    
  }
  }

  getPage(page:number,size:number):Observable<PageVigilance>{
  
    let index = page * size;
    let totalPages = ~~(this.vigilances.length/size);
    if(this.vigilances.length % size != 0)
      totalPages ++;
    let pageEquipements = this.vigilances.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      vigilances:pageEquipements
    })
  }

  onEdit(){
    if(this.currentId)
   
    this.vigilanceService.updateVigilance(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        alert('Update Succes');
      },err=> console.log('error',err)
    )
}

  gotoPage(i:number){
    this.currentPage = i;
    this.onGetAllVigilance();
  }

}
