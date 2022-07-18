import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';

const routes: Routes = [
{path:'',component:HabitationsComponent},
{path:'habitations',component:HabitationsComponent},
{path:'typesquestions',component:TypesQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
