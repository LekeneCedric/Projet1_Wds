import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORIESComponent } from './components/categories/categories.component';
import { EQUIPEMENTSComponent } from './components/equipements/equipements.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { QUESTIONSComponent } from './components/QUESTIONS/questions.component';
import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';
import { PropositionsService } from './services/propositions.service';

const routes: Routes = [
{path:'',component:HabitationsComponent},
{path:'habitations',component:HabitationsComponent},
{path:'typesquestions',component:TypesQuestionsComponent},
{path:'questions',component:QUESTIONSComponent},
{path:'categories',component:CATEGORIESComponent},
{path:'propositions',component:PropositionsService},
{path:'equipements',component:EQUIPEMENTSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
