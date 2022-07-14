import IEquipement from "./equipement.models";

export default interface ITypeEquipement {
        id?: string,
        idparent?: any,
        intitule: string,
        created_at: Date,
        updated_at: Date,
        equipements? : IEquipement[]
}