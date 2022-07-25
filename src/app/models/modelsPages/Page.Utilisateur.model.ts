import Iuser from '../users.models';

export default interface PageUser {
    prestataires: Iuser[];
    page:number;
    size:number;
    totalPages:number;  
}