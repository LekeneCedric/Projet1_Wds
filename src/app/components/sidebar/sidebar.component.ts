import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
       private router:Router
    ) { }

  ngOnInit(): void {
  }

  goToConseil(){
   this.router.navigate(['/conseils']);
  }
  goToUser(){
    this.router.navigate(['/users']);
   }
  
  goToAbonnementSearch(){
    this.router.navigate(['/abonnementsearch']);
  }
  //abonnement
  goToAbonnement(){
    this.router.navigate(['/abonnement']);
  }
  goToPrestatire(){
    this.router.navigate(['/prestataire'])
  }
}
