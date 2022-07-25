export default interface IabonnementSearch{
    id: number;
    idabonnement: number;
    iduser: number;
    datedeb: Date;
    datefin: Date;
    montant: number;
    etat: number;
    created_at: Date;
    updated_at: Date;
    titre: string;
    duree: string;
    periode: string;
    couleur: string
}