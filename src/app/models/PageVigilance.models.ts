import IVigilance from "./vigilance.models";

export default interface PageVigilance{
 vigilances:IVigilance[];
 page:number;
 size:number;
 totalPages:number;   
}