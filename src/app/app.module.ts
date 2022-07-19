import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormationComponent } from './components/formation/formation.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { OutputComponent } from './components/output/output.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { EnvironnementComponent } from './components/environnement/environnement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VigilanceStateComponent } from './components/vigilance-state/vigilance-state.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitationComponent } from './components/HABITATION/habitation/habitation.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VigilanceComponent,
    HeaderComponent,
    SidebarComponent,
    FormationComponent,
    EntrepriseComponent,
    OutputComponent,
    EquipementComponent,
    EnvironnementComponent,
    VigilanceStateComponent,
    SidemenuComponent,
    NavbarComponent,
    HabitationComponent,
    HabitationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
