import IFormation from "../formations.models";

export default interface pageFormation{
    formations:IFormation[];
    page:number;
    size:number;
    totalPages:number;   
}