import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import ICategorie from 'src/app/models/categorie.models';
import PageCategorie from 'src/app/models/modelsPages/pageCategorie.models';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CATEGORIESComponent implements OnInit {

  constructor(private service:CategoriesService) { }
  currentPage:number = 0;
  pageSize:number = 6;
  totalPages:number = 0;
  selected:number = 10;
  getPage(page:number,size:number):Observable<PageCategorie>{
  
    let index = page * size;
    let totalPages = ~~(this.categories_list!.length/size);
    if(this.categories_list!.length % size != 0)
      totalPages ++;
    let pageEquipements = this.categories_list!.slice(index,index+size);
    return of({
      page:page,
      size:size,
      totalPages:totalPages,
      categories:pageEquipements
    })
  }

  onGetPageQuestions(): void {
    this.getPage(this.currentPage,this.pageSize)
    .subscribe(
      (data)=> {
        this.categories_list! = data.categories;
        this.totalPages = data.totalPages;


      }
    )
  }

 
  onSelected(value:string): void {
		this.selected = Number(value);
    if(this.selected != -1 || this.selected < this.categories_list!.length){
      this.pageSize = this.selected;
    }else{
      this.pageSize =this.categories_list!.length;
    }
    this.getListQuestions();
	}

  async getListQuestions(){
    await this.service.getAllCategory().subscribe(data=>{
      /*Et on les stocke dans notre variable (habitations_list)*/
      this.categories_list! = data.reverse();
      this.onGetPageQuestions();
    })
  }
  
  gotoPage(i:number){
    this.currentPage = i;
    this.getListQuestions();

  }
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
  parents_categories_list?:ICategorie[]=[];
  async ngOnInit(){
   await this.service.getAllCategory().subscribe(
      data=>{
        this.categories_list=data.reverse();
        this.onGetPageQuestions();
        this.categories_list?.forEach(category=>{
          category.idparent==null?this.parents_categories_list?.push(category):null;
        })
      }
    );
  
  }
  setCurrentCategorie(categorie:ICategorie){
    this.update_idparent = categorie.idparent;
    this.update_parent = categorie.parent; 
    this.update_intitule = categorie.intitule;
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
      intitule:this.new_intitule!
    }
    this.service.addCategory(cat).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
        this.new_idparent=null;
        this.new_intitule = "";
        this.new_parent =null;
      }
    )
  }
  updateCategorie(){
    const cat :ICategorie = {
      id: this.current_categorie?.id,
      idparent:this.update_idparent,
      intitule:this.update_intitule!
    }
    this.service.updateCategorie(cat).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }

}
