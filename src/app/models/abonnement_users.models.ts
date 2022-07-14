export default interface Abonnement{
    id: number;
    idabonnement: number;
    iduser: number;
    datedeb: Date;
    datefin: Date;
    montant: number;
    etat: number;
    created_at: string;
    updated_at: Date;
}