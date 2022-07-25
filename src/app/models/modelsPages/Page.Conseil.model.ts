import  Iconseil from '../conseils.models'

export default interface PageConseil{
    conseils:Iconseil[];
    page:number;
    size:number;
    totalPages:number;  
}