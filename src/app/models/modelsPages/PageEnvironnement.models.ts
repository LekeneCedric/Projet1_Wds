import IOutputEnvironnement from "../output_environnement.models";

export default interface PageEnvironnement{
    environnements:IOutputEnvironnement[];
    page:number;
    size:number;
    totalPages:number;  
}