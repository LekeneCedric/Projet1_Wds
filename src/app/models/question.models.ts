import IProposition from "./proposition.models"

export default interface IQuestion{
    label: string,
    question: {
        id?: number,
        idtype: any,
        intitule: string,
        obligatoire: number,
        ordre: number,
        type: string,
        proposition?:IProposition[]
        created_at: Date,
        updated_at: Date
    }
}