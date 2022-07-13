export default interface IEntreprisesFormation{
    id?: number,
    logo: string,
    nom: string,
    type: string,
    type_entreprise: string,
    email: string,
    tel: string,
    adresse: string,
    description:string,
    catalogue: string,
    calendrier: string,
    isprestataire: boolean,
    isentreprise: boolean,
    type_prestataire?: any,
    domaine: string
}