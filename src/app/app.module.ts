import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConseilComponent } from './components/conseil/conseil.component';
import { DetailconseilComponent } from './components/detailconseil/detailconseil.component';
import { SearchComponent } from './components/search/search.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { UserComponent } from './components/user/user.component';
import { AbonnementUsersComponent } from './components/abonnement-users/abonnement-users.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';





import { FormationComponent } from './components/formation/formation.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { OutputComponent } from './components/output/output.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { EnvironnementComponent } from './components/environnement/environnement.component';
import { VigilanceStateComponent } from './components/vigilance-state/vigilance-state.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';
import { QUESTIONSComponent } from './components/QUESTIONS/questions.component';
import { CATEGORIESComponent } from './components/categories/categories.component';
import { PROPOSITIONSComponent } from './components/propositions/propositions.component';
import { EQUIPEMENTSComponent } from './components/equipements/equipements.component';
@NgModule({
  declarations: [
    AppComponent,
    VigilanceComponent,
    HeaderComponent,
    SidebarComponent,
    ConseilComponent,
    DetailconseilComponent,
    SearchComponent,
    UserComponent,
    AbonnementUsersComponent,
    AbonnementComponent,
    PrestataireComponent,
    FormationComponent,
    EntrepriseComponent,
    OutputComponent,
    EquipementComponent,
    EnvironnementComponent,
    VigilanceStateComponent,
    SidemenuComponent,
    NavbarComponent,
    HabitationsComponent,
    TypesQuestionsComponent,
    QUESTIONSComponent,
    CATEGORIESComponent,
    PROPOSITIONSComponent,
    EQUIPEMENTSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSummernoteModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
