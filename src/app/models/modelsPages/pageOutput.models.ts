import IOutputs from "../outputs.models";

export default interface PageOutPuts{
    outputs:IOutputs[];
    page:number;
    size:number;
    totalPages:number;   
}