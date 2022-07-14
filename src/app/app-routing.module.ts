import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { FormationComponent } from './components/formation/formation.component';
import { OutputEnvironnementComponent } from './components/output-environnement/output-environnement.component';
import { OutputEquipementComponent } from './components/output-equipement/output-equipement.component';
import { OutputComponent } from './components/output/output.component';
import { VigilanceComponent } from './components/vigilance/vigilance.component';

const routes: Routes = [
  {
    path:'vigilance',
    component:VigilanceComponent
  },
  {
    path:'formations',
    component:FormationComponent
  },
  {
    path:'entreprises_formation',
    component:EntrepriseComponent
  },
  {
    path:'outputs',
    component:OutputComponent
  },
  {
    path:'output_equipement',
    component:OutputEquipementComponent
  },
  {
    path:'output_environnement',
    component:OutputEnvironnementComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
