import  Iquestion  from './question';

export default interface  Iuser_reponseelt{
    id: number;
    idusers: number;
    idhabitation: number;
    etat: string;
    idquestion: number;
    response: string;
    isautre: string;
    created_at: Date;
    updated_at: Date;
    intitule: string;
    questions:Iquestion[];
}