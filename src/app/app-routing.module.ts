import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EnvironnementComponent } from './components/environnement/environnement.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { FormationComponent } from './components/formation/formation.component';
import { OutputComponent } from './components/output/output.component';
import { VigilanceStateComponent } from './components/vigilance-state/vigilance-state.component';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { HabitationComponent } from './components/HABITATION/habitation/habitation.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
const routes: Routes = [
  {path:'vigilance' , component:VigilanceComponent },
  {path:'formations' , component:FormationComponent },
  {path:'entreprises_formation' , component:EntrepriseComponent },
  {path:'outputs' , component:OutputComponent },
  {path:'output_equipement' , component:EquipementComponent },
  {path:'output_environnement' , component:EnvironnementComponent },
  {path:'propositionselt/getvigilance/:etat' , component:VigilanceStateComponent },
  
  {path:'',component:HabitationsComponent},
  {path:'habitations',component:HabitationsComponent},
  {path:'habitations/:id',component:HabitationComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
