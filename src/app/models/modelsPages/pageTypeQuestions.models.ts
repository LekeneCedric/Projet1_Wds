import ITypequestion from "../typequestion.models";

export default interface PageTypeQuestion{
    questions:ITypequestion[];
    page:number;
    size:number;
    totalPages:number;   
   }