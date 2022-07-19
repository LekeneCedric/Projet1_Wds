import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EnvironnementComponent } from './components/environnement/environnement.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { FormationComponent } from './components/formation/formation.component';
import { OutputComponent } from './components/output/output.component';
import { VigilanceStateComponent } from './components/vigilance-state/vigilance-state.component';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { DetailconseilComponent } from './components/detailconseil/detailconseil.component';
import { UserComponent } from './components/user/user.component';
import { AbonnementUsersComponent } from './components/abonnement-users/abonnement-users.component';
import {  AbonnementComponent } from './components/abonnement/abonnement.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';
import { CATEGORIESComponent } from './components/categories/categories.component';
import { EQUIPEMENTSComponent } from './components/equipements/equipements.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { QUESTIONSComponent } from './components/QUESTIONS/questions.component';
import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';
import { PropositionsService } from './services/propositions.service';

const routes: Routes = [
  { path:'vigilance', component:VigilanceComponent },
  { path:'conseils', component:ConseilComponent },
  { path:'users', component:UserComponent },
  { path:'abonnementsearch', component: AbonnementUsersComponent },
  { path:'abonnement' , component:AbonnementComponent},
  { path:'prestataire' , component:PrestataireComponent },
  { path: 'conseil/:id', component:DetailconseilComponent },
  {path:'vigilance' , component:VigilanceComponent },
  {path:'formations' , component:FormationComponent },
  {path:'entreprises_formation' , component:EntrepriseComponent },
  {path:'outputs' , component:OutputComponent },
  {path:'output_equipement' , component:EquipementComponent },
  {path:'output_environnement' , component:EnvironnementComponent },
  {path:'propositionselt/getvigilance/:etat' , component:VigilanceStateComponent },
  {path:'',component:HabitationsComponent},
  {path:'habitations',component:HabitationsComponent},
  {path:'typesquestions',component:TypesQuestionsComponent},
  {path:'questions',component:QUESTIONSComponent},
  {path:'categories',component:CATEGORIESComponent},
  {path:'propositions',component:PropositionsService},
  {path:'equipements',component:EQUIPEMENTSComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
