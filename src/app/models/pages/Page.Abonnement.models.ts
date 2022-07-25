import  IabonnementSearch  from '../abonnement_users.models';

export default interface PageAbonnement{
    abonnements:IabonnementSearch[];
    page:number;
    size:number;
    totalPages:number;  
}