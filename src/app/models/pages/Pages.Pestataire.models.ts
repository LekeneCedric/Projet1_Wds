import  Iprestataire from '../prestataire.model';

export default interface PagePrestataire {
    prestataires: Iprestataire[];
    page:number;
    size:number;
    totalPages:number;  
}