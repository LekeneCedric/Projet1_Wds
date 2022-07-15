import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitationComponent } from './components/HABITATION/habitation/habitation.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';

const routes: Routes = [
{path:'',component:HabitationsComponent},
{path:'habitations',component:HabitationsComponent},
{path:'habitations/:id',component:HabitationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
