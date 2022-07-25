import { Component, OnInit } from '@angular/core';
import ICategorie from 'src/app/models/categorie.models';
import IEquipement from 'src/app/models/equipement.models';
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
        this.equipements_list = data;
        console.log(data);
      }
    );
    await this.categorieService.getAllCategory().subscribe(
      data=>{
        this.categories_list = data;
        console.log(data);
      }
    );
    await this.questionService.getAllQuestions().subscribe(
      data=>{
        this.questions_list = data;
        console.log(data);
      }
    )
  }

  setCurrentEquipement(equipement:IEquipement){
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
}
