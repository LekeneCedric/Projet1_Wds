import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanceComponent } from './components/vigilance/vigilance.component';

const routes: Routes = [
  {path:'vigilance' , component:VigilanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
