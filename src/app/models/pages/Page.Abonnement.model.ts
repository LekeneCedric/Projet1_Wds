import  Iabonnement from '../abonnements.models'

export default interface PageAbonnement{
    abonnements:Iabonnement[];
    page:number;
    size:number;
    totalPages:number;  
}