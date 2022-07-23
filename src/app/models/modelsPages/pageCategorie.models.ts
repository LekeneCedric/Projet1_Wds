import ICategorie from "../categorie.models";

export default interface PageCategorie{
 categories:ICategorie[];
 page:number;
 size:number;
 totalPages:number;   
}