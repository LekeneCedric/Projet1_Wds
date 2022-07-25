export default interface Iprestataire{
    id: number;
    idutilisateur: number;
    typeelement: string;
    idhabitation: number,
    idelement: string,
    typeutilisateur: string;
    nom: string;
    telephone: string;
    email: string;
    pays: string;
    ville: string;
    secteur_activite: string;
    etat_habitation: string;
    demande: string; 
    nbpersonne: string;
    pourequip: string;
    typeformation: string;
    localisation: string;
    fait_le: string;
}