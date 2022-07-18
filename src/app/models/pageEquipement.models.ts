import IOutputEquipement from "./output_equipement.models";

export default interface PageEquipement{
 equipements:IOutputEquipement[];
 page:number;
 size:number;
 totalPages:number;   
}