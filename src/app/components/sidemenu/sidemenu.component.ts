import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private route:Router) { }
  
  ngOnInit(): void {
    // document.getElementById(`habitations`)?.classList.add('active');
  }

  /*Dans cette fonction , nous recuperons le path(url) actuelle en fontion de la quelle 
  nous adjoutons ou retirons la classe('active') qui est la classe charge de mettre une couleur
  orange a l'extremite gauche du menu */
  isactive():void{
    const path = this.route.url;
    switch (path) {
      case '/habitations':
        document.getElementById('habitations')?.classList.add('active');
        document.getElementById('typesquestions')?.classList.remove('active');
        document.getElementById('questions')?.classList.remove('active');
        document.getElementById('equipements')?.classList.remove('active');
        document.getElementById('categories')?.classList.remove('active');
        break;
      case '/typesquestions':
        document.getElementById('habitations')?.classList.remove('active');
        document.getElementById('typesquestions')?.classList.add('active');
        document.getElementById('questions')?.classList.remove('active');
        document.getElementById('equipements')?.classList.remove('active');
        document.getElementById('categories')?.classList.remove('active');
        break;
      case '/questions':
        document.getElementById('habitations')?.classList.remove('active');
        document.getElementById('typesquestions')?.classList.remove('active');
        document.getElementById('questions')?.classList.add('active');
        document.getElementById('equipements')?.classList.remove('active');
        document.getElementById('categories')?.classList.remove('active');
          break;
      case '/equipements':
         document.getElementById('habitations')?.classList.remove('active');
         document.getElementById('typesquestions')?.classList.remove('active');
         document.getElementById('questions')?.classList.remove('active');
         document.getElementById('equipements')?.classList.add('active');
         document.getElementById('categories')?.classList.remove('active');
         break;
      case '/categories':
         document.getElementById('habitations')?.classList.remove('active');
         document.getElementById('typesquestions')?.classList.remove('active');
         document.getElementById('questions')?.classList.remove('active');
         document.getElementById('equipements')?.classList.remove('active');
         document.getElementById('categories')?.classList.add('active');
              break;          

      default:
        break;
    }
    
  }

}
