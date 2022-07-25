import { Component, OnInit } from '@angular/core';
import ICategorie from 'src/app/models/categorie.models';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CATEGORIESComponent implements OnInit {

  constructor(private service:CategoriesService) { }
  update_idparent?:any;
  update_intitule?:string;
  update_parent?:any;
  /************************************************************************************************ */
  new_idparent?:any;
  new_intitule?:string;
  new_parent?:any;
  search:string="";

  current_categorie?:ICategorie;
  categories_list?:ICategorie[]=[];
  async ngOnInit(){
    this.service.getAllCategory().subscribe(
      data=>{
        console.log(data);
        this.categories_list=data;
      }
    )
  }
  setCurrentCategorie(categorie:ICategorie){
    this.current_categorie = categorie;
  }
  deleteCategorie(id:number){
    this.service.deleteCategorie(id).subscribe(data =>
      { this.ngOnInit();
      console.log(data)});
      
  }
  addCategorie(){
    const cat :ICategorie = {
      idparent:this.new_idparent,
      intitule:this.new_intitule!,
      parent:this.new_parent
    }
    this.service.addCategory(cat).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
        alert("Category ajoute avec success");
      }
    )
  }
  updateCategorie(){
    const cat :ICategorie = {
      id: this.current_categorie?.id,
      idparent:this.update_idparent,
      intitule:this.update_intitule!,
      parent:this.update_parent
    }
    this.service.updateCategorie(cat).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
        alert("categorie modifie avec success");
      }
    )
  }

}
