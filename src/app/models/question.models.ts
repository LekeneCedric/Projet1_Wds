import IProposition from "./proposition.models"

export default interface IQuestion{
        id?: number,
        idtype: any,
        intitule: string,
        ordre: number,
        type: string,
        obligatoire: number,   
        created_at?: Date,
        updated_at: Date
    
}