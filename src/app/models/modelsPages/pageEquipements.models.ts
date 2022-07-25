import IEquipement from "../equipement.models";

export default interface PageEquipement{
 equipements:IEquipement[];
 page:number;
 size:number;
 totalPages:number;   
}