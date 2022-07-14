export default interface Iabonnement{
    id: number;
    periode: number;
    frequence: string;
    montant: number;
    description: string;
    created_at: Date;
    updated_at : Date;
}