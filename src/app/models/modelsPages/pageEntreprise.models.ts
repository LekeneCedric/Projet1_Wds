import IEntreprisesFormation from "../entreprises_formations.models";

export default interface PageEntreprise{
    entreprises:IEntreprisesFormation[];
     page:number;
     size:number;
     totalPages:number;   
}