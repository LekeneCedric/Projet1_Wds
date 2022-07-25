import Iuser from './users.models';

export default interface IabonnementSearch{
    id: number;
    idabonnement: number;
    iduser: number;
    datedeb: Date;
    datefin: Date;
    montant: number;
    etat: number;
    created_at: Date | null;
    updated_at: Date | null;
    utilisateurs:Iuser[];
}