import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { DetailconseilComponent } from './components/detailconseil/detailconseil.component';
import { UserComponent } from './components/user/user.component';
import { AbonnementUsersComponent } from './components/abonnement-users/abonnement-users.component';
import {  AbonnementComponent } from './components/abonnement/abonnement.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';

const routes: Routes = [
  { path:'vigilance', component:VigilanceComponent },
  { path:'conseils', component:ConseilComponent },
  { path:'users', component:UserComponent },
  { path:'abonnementsearch', component: AbonnementUsersComponent },
  { path:'abonnement' , component:AbonnementComponent},
  { path:'prestataire' , component:PrestataireComponent },
  { path: 'conseil/:id', component:DetailconseilComponent },
  { path:'', redirectTo:'conseils', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
