import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from "@ng-select/ng-select";

import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';

import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';
import { QUESTIONSComponent } from './components/QUESTIONS/questions.component';
import { CATEGORIESComponent } from './components/categories/categories.component';
import { PROPOSITIONSComponent } from './components/propositions/propositions.component';
import { EQUIPEMENTSComponent } from './components/equipements/equipements.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AbonnementUsersComponent } from './components/abonnement-users/abonnement-users.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { DetailconseilComponent } from './components/detailconseil/detailconseil.component';
import { HeaderComponent } from './components/header/header.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

import { NgxSummernoteModule } from 'ngx-summernote';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EnvironnementComponent } from './components/environnement/environnement.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { FormationComponent } from './components/formation/formation.component';
import { OutputEquipementLieComponent } from './components/output-equipement-lie/output-equipement-lie.component';
import { OutputComponent } from './components/output/output.component';
import { VigilanceStateComponent } from './components/vigilance-state/vigilance-state.component';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SidemenuComponent,
    HabitationsComponent,
    TypesQuestionsComponent,
    QUESTIONSComponent,
    CATEGORIESComponent,
    PROPOSITIONSComponent,
    EQUIPEMENTSComponent,

    HeaderComponent,
    SidebarComponent,
    ConseilComponent,
    DetailconseilComponent,
    SearchComponent,
    UserComponent,
    AbonnementUsersComponent,
    AbonnementComponent,
    PrestataireComponent,
    VigilanceComponent,
    OutputEquipementLieComponent,
    FormationComponent,
    EntrepriseComponent,
    OutputComponent,
    EquipementComponent,
    EnvironnementComponent,
    VigilanceStateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxSummernoteModule ,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
