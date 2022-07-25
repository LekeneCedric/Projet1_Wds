import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import IEntreprisesFormation from 'src/app/models/entreprises_formations.models';
import IFormation from 'src/app/models/formations.models';
import PageEntreprise from 'src/app/models/modelsPages/pageEntreprise.models';
import pageFormation from 'src/app/models/modelsPages/pageFormation.models';
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
  currentId?:number;
  currentPage:number = 0;
  pageSize:number = 10;
  totalPages:number = 0;
  selected:number = 10;
  descVal:string = '';
  catalogueVal:string = '';
  calendrierVal:string = '';
  isprestataireVal:boolean = false;
  isentrepriseVal:number = 0;
  domaineVal:string = '';
  logoVal:string = '';


  constructor(
    private entreprisesService:EntreprisesService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.onGetAllEntreprise();
    this.formGroup = this.fb.group({
      logo:'',
      nom:["",Validators.required],
      type:["",Validators.required],
      type_entreprise:["",Validators.required],
      email:["",Validators.required],
      tel:["",Validators.required],
      adresse:["",Validators.required],
      description:["",Validators.required],
      catalogue:["",Validators.required],
      calendrier:["",Validators.required],
      isprestataire:[false,Validators.required],
      isentreprise:[false,Validators.required],
      type_prestataire:[""],
      domaine:["",Validators.required],

    });

    this.formGroup2 = this.formGroup;
  }

  get logo(){return this.formGroup.get('logo');}

  get nom(){return this.formGroup.get('nom');}

  get type(){return this.formGroup.get('type');}

  get type_entreprise(){return this.formGroup.get('type_entreprise');}

  get email(){return this.formGroup.get('email');}

  get tel(){return this.formGroup.get('reference');}

  get adresse(){return this.formGroup.get('adresse');}

  get description(){return this.formGroup.get('description');}

  get catalogue(){return this.formGroup.get('catalogue');}

  get calendrier(){return this.formGroup.get('calendrier');}

  get isprestataire(){return this.formGroup.get('isprestataire');}

  get isentreprise(){return this.formGroup.get('isentreprise');}

  get domaine(){return this.formGroup.get('domaine');}


  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.entreprises.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.entreprises.length;
    }
    this.onGetAllEntreprise();
	}



  
  onGetAllEntreprise(): void {
    this.entreprisesService.getAllEntreprises_formation()
    .subscribe(
      (data)=>{
        this.entreprises = data;
        this.onGetPageEntreprise();
      }
    )
  }


  onGetPageEntreprise() {
     this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.entreprises = data.entreprises;
        this.totalPages = data.totalPages;
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
        console.log('form',this.formGroup);
        console.log('data',data);
        // alert('Add Success');
        this.onGetAllEntreprise();
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

  onEditEntreprise(item:IEntreprisesFormation):void{

    if(item.id ){

      this.entreprisesService.getEntrepriseById(item.id)
      .subscribe(
        (data)=> {
          this.currentId = item.id;
          this.formGroup2 = this.fb.group({
            // logo:[data[0]['logo'],Validators.required],
            nom:[data[0]['nom'],Validators.required],
            type:[data[0]['type'],Validators.required],
            type_entreprise:[data[0]['type_entreprise'],Validators.required],
            email:[data[0]['email'],Validators.required],
            tel:[data[0]['tel'],Validators.required],
            adresse:[data[0]['adresse'],Validators.required],
            description:[data[0]['description'],Validators.required],
            catalogue:[data[0]['catalogue'],Validators.required],
            calendrier:[data[0]['calendrier'],Validators.required],
            isprestataire:[data[0]['isprestataire'],Validators.required],
            isentreprise:[data[0]['isentreprise'],Validators.required],
            type_prestataire:[data[0]['type_prestataire']],
            domaine:[data[0]['domaine'],Validators.required],
          })
        }
      )    
  }
  }

  getPage(page:number,size:number):Observable<PageEntreprise>{
  
    let index = page * size;
    let totalPages = ~~(this.entreprises.length/size);
    if(this.entreprises.length % size != 0)
      totalPages ++;
    let pageEquipements = this.entreprises.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      entreprises:pageEquipements
    })
  }


  onEdit(){
    if(this.currentId)
   
    this.entreprisesService.updateEntreprises_formation(this.currentId,this.formGroup2.value)
    .subscribe(
      (data)=>{
        this.onGetAllEntreprise();
      },err=> console.log('error',err)
    )
}

  gotoPage(i:number){
    this.currentPage = i;
    this.onGetAllEntreprise();
  }

  showInModal(item:IEntreprisesFormation){
    console.log(item.isentreprise)
   this.descVal = item.description;
   this.catalogueVal = item.catalogue;
   this.calendrierVal = item.calendrier;
   this.isprestataireVal = item.isprestataire;
   this.isentrepriseVal = Number(Boolean(this.isentreprise));
   console.log(this.isentrepriseVal);
    this.domaineVal = item.domaine;
    // this.logoVal = item.logo;
  }

   //config for summer note
   config:any = {
    placeholder: '',
    tabsize: 2,
    height: 200,
  
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  onUploadFile($event:any){
    if ($event.target.files.length > 0)
    {
        let ftu: File ;
        ftu = $event.target.files[0];
        console.log(ftu);
        this.formGroup.controls['logo'].setValue(ftu);
        this.logoVal = ftu.name;
        // this.model.content = $event.target.files[0];
    }
  }
}
