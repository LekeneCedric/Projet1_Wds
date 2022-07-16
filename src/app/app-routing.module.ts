import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { DetailconseilComponent } from './components/detailconseil/detailconseil.component'

const routes: Routes = [
  { path:'vigilance', component:VigilanceComponent },
  { path:'conseils', component:ConseilComponent },
  { path: 'conseil/:id', component:DetailconseilComponent },
  { path:'', redirectTo:'conseils', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
