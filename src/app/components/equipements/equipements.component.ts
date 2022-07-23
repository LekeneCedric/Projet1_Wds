import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import ICategorie from 'src/app/models/categorie.models';
import IEquipement from 'src/app/models/equipement.models';
import PageEquipement from 'src/app/models/modelsPages/pageEquipement.models';
import IQuestion from 'src/app/models/question.models';
import { CategoriesService } from 'src/app/services/categories.service';
import { EquipementsService } from 'src/app/services/equipements.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.scss']
})
export class EQUIPEMENTSComponent implements OnInit {

  constructor(private service:EquipementsService,private categorieService:CategoriesService,
              private questionService:QuestionsService) { }
              currentPage:number = 0;
              pageSize:number = 6;
              totalPages:number = 0;
              selected:number = 10;
              getPage(page:number,size:number):Observable<PageEquipement>{
              
                let index = page * size;
                let totalPages = ~~(this.equipements_list.length/size);
                if(this.equipements_list.length % size != 0)
                  totalPages ++;
                let pageEquipements = this.equipements_list.slice(index,index+size);
                return of({
                  page:page,
                  size:size,
                  totalPages:totalPages,
                  equipements:pageEquipements
                })
              }
            
              onGetPageEquipement(): void {
                this.getPage(this.currentPage,this.pageSize)
                .subscribe(
                  (data)=> {
                    this.equipements_list = data.equipements;
                    this.totalPages = data.totalPages;
            
            
                  }
                )
              }
            
             
              onSelected(value:string): void {
                this.selected = Number(value);
                if(this.selected != -1 || this.selected < this.equipements_list.length){
                  this.pageSize = this.selected;
                }else{
                  this.pageSize =this.equipements_list.length;
                }
                this.getListEquipements();
              }
            
              async getListEquipements(){
                await this.service.getAllEquipements().subscribe(data=>{
                  /*Et on les stocke dans notre variable (habitations_list)*/
                  this.equipements_list = data.reverse();
                  this.onGetPageEquipement();
                })
              }
              
              gotoPage(i:number){
                this.currentPage = i;
                this.getListEquipements();
            
              }
  update_idcatergorie?:number;
  update_idquestion?:number;
  update_choix?:string;
  update_created_at?:Date;
  update_updated_at?:Date;
  update_categorieintitule?:string;
  update_intituletype?:string;
  /******************************************/
  new_idcatergorie?:number;
  new_idquestion?:number;
  new_choix?:string;
  new_created_at?:Date;
  new_updated_at?:Date;
  new_categorieintitule?:string;
  new_intituletype?:string;

  /*******************************************/
  /**Au lieur de proposer a l'admin d'entrer manuellement les idcategorie 
   * et idquestion correspondantes , nous allons lui permettre de choisier dans une 
   * list les differentes categories et questions et recuperer les id correspondant 
   * en backend
   */
  categories_list?:ICategorie[];
  questions_list?:any[]
  current_equipement?:IEquipement;
  equipements_list:any[]=[];
  search : string = "";
  

  async ngOnInit(){
   
    await this.service.getAllEquipements().subscribe(
      data=>{
        this.equipements_list = data.reverse();
        this.onGetPageEquipement();
        console.log(data);
      }
    )
    await this.categorieService.getAllCategory().subscribe(
      data=>{
        this.categories_list = data;
        console.log(data);
      }
    )
    await this.questionService.getAllQuestions().subscribe(
      data=>{
        this.questions_list = data;
        console.log(data);
      }
    )
  }

  setCurrentEquipement(equipement:IEquipement){
    this.update_categorieintitule=equipement.categorieintitule;
    this.update_choix = equipement.choix;
    this.update_idcatergorie = equipement.idcategorie;
    this.update_idquestion = equipement.idquestion;
    this.update_intituletype = equipement.intituletype;
    this.current_equipement = equipement;
    console.log(equipement);
  }

  deleteEquipement(id:any){
    this.service.deleteEquipement(id).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    );
  }

  addEquipement(){
    const equipement :IEquipement = {
      idcategorie: this.new_idcatergorie,
      idquestion: this.new_idquestion,
      choix: this.new_choix,
      created_at: new Date(),
      updated_at: new Date(),
      // categorieintitule:this.new_categorieintitule,
      // intituletype:this.new_intituletype
    }
    this.service.postEquipement(equipement).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    );
  }
  updateEquipement(){
    const updateEq : IEquipement = {
      id:this.current_equipement?.id,
      idcategorie: this.update_idcatergorie,
      idquestion: this.update_idquestion,
      choix: this.update_choix,
      updated_at: new Date(),
      // categorieintitule: this.update_categorieintitule,
      // intituletype: this.update_intituletype,
    }
    console.log(updateEq);
    this.service.putEquipement(updateEq).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
 getCategory(id:any):string{
  let category!:string;
  if(typeof id === 'number'){
    
    this.categorieService.getOneCategory(id).subscribe(
     (data)=>{
       category = data.intitule.toString();
     },
     (err)=>{
       console.log(err.message())
     }
    )
  }
  else {
    category = "";
  }
  
   return category;
  }
}
