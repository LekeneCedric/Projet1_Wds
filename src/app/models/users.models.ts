export default interface Iuser{
    id: number;
    nom: string;
    email: string;
    password: string;
    telephone: number;
    profession: string;
    profile: string;
    isconnecter: number;
    created_at: Date;
    updated_at: Date
}