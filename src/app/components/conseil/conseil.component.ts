import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConseilService } from '../../services/conseil.service';
import  Iconseil  from '../../models/conseils.models';
import  PageConseil from '../../models/pages/Page.Conseil.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.scss']
})
export class ConseilComponent implements OnInit {

  arrayConseil:Iconseil[] = [];

  conseilItem:Iconseil= {
    id: 0,
    couverture: '',
    titre: '',
    description: '',
    semidescription: ''
  }

  pageSize:number = 5;
  totalPages:number = 0;
  selected:number = 10;
  currentPage:number ;


  id:number;
  couverture:string | undefined = " ";
  titre:string | undefined = " ";
  description: string | undefined;
  semidescription: string | undefined;

  searchText:string= "";
  descriptionContent = "";
  semiDescriptionContent = "";

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


  constructor(
    private conseil: ConseilService
  ) { }

  ngOnInit(): void {
   this.getAllConseils();
   this.gotoPage(0);
  }

  getAllConseils(){
    this.conseil.getAllConseils().then((data:any) =>{
      this.arrayConseil = data.reverse();
      this.onGetPageVigilance();
     // console.log(this.arrayConseil);
    }).catch((err) =>{
      console.log(err.message());
    }
    );
  }

  addConseil(){

    let lastId = 0;
    let taille = 0;
    this.conseilItem.couverture = this.couverture! ;
    this.conseilItem.titre = this.titre!;
    this.conseilItem.description = this.description!;
    this.conseilItem.semidescription = this.semidescription!;

    //recuperation du dernier id
   
    taille = this.arrayConseil.length;
    lastId = this.arrayConseil[taille-1].id;
    this.conseilItem.id = lastId+1;

    //utilisation de la fonction d'ajout du service
    this.conseil.addConseil(this.conseilItem).then((data) => {
      console.log("conseil add successfully"+ data);

      this.getAllConseils();
     

    }).catch((err)=>{
      console.log("enable add" + err.message());
    });
      this.couverture = " ";
      this.titre = " ";
      this.description = " ";
      this.semidescription = " "; 
  }

  updateConseille(conseil:Iconseil){
  
    // recuperation des nouvelles valeurs 
   // alert(conseil.id);
    this.conseilItem.id = this.id!;
    this.conseilItem.couverture = this.couverture! ;
    this.conseilItem.titre = this.titre!;
    this.conseilItem.description = this.description!;
    this.conseilItem.semidescription = this.semidescription!;

    this.conseil.updateConseil(this.conseilItem).then((data)=>{
     // console.log("conseil update successfully"+ data);
      //console.log(data);
      this.ngOnInit();
    }).catch((err)=>{
      console.log("enable update" + err.message());
    });
   // this.getAllConseils();
  }
  
  deleteConseil(conseil:Iconseil){
   /*if this.conseil.deleteConseil(conseil.id).subscribe(data =>{
      console.log("conseil delete successfully"+ data);
    },(err)=>{
      console.log("enable to delete"+ err.message())
    })*/
    if(window.confirm("est vous sure de vouloir supprimer le conseil de titre "+`${conseil.titre}`)){
      this.conseil.deleteConseil(conseil.id).then((data)=>{
        console.log("conseil delete successfully"+ data);
        this.getAllConseils();
      }).catch((err)=>{
        console.log("enable delete" + err.message());
      });
    }
  
  }


  on(serachvalue:string){
    this.searchText = serachvalue;
  }
  //( search) =  on($event)
  //chargement de description et de semidescription dans des variables 
  check(conseil:Iconseil){
    this.titre = conseil.titre;
    this.descriptionContent = conseil.description;
    this.semiDescriptionContent = conseil.semidescription;
  }

  checkUpdate(conseil:Iconseil){
      //console.log(conseil);
      //chargement des information a modifier 
      this.id = conseil.id;
      this.couverture = conseil.couverture;
      this.titre = conseil.titre;
      this.description = conseil.description;
      this.semidescription = conseil.semidescription;
    //  console.log(this.descriptionContent);
  }

  clear(){
    this.titre = " ";
    this.description = " ";
    this.semidescription = " ";
  }

  
  //pagination
  getPage(page:number,size:number):Observable<PageConseil>{
  
    let index = page * size;
    let totalPages = ~~(this.arrayConseil.length/size);
    if(this.arrayConseil.length % size != 0)
      totalPages ++;
    let pageAbonnements = this.arrayConseil.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      conseils:pageAbonnements
    })
  }

  onGetPageVigilance(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.arrayConseil= data. conseils;
        this.totalPages = data.totalPages;
      }
    )
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.getAllConseils();
  }

  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.arrayConseil.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.arrayConseil.length;
    }
    this.getAllConseils();
  }
}
