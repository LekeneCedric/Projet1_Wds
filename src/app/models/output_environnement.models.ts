export default interface IOutputEnvironnement{
    id?:number,
    titre: string,
    classement: string,
    standard: string,
    livrable?: any,
    validite?: any,
    delai?: any,
    cout_etude?: any,
    frais_admin?: any,
    penalite?: any,
    ispayer: boolean,
    isenvironnement: boolean,
    isdate: boolean,
    periode?: any,
    frequence?: any,
    isrelation: boolean,
    ordre: number,
    created_at?: Date,
    updated_at?: Date
}