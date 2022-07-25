export default interface Iabonnement{
    id: number;
    periode: number;
    intitule: string
    frequence : string;
    montant: number;
    description: string;
    created_at: Date | null;
    updated_at : Date | null;
}