import IHabitation from "../habitation.models";

export default interface PageHabitation{
 habitations:IHabitation[];
 page:number;
 size:number;
 totalPages:number;   
}