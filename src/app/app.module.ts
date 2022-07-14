import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { VigilanceComponent } from './components/vigilance/vigilance.component';
import { FormationComponent } from './components/formation/formation.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { OutputComponent } from './components/output/output.component';

import { OutputEnvironnementComponent } from './components/output-environnement/output-environnement.component';
import { OutputEquipementComponent } from './components/output-equipement/output-equipement.component';
@NgModule({
  declarations: [
    AppComponent,
    VigilanceComponent,
    FormationComponent,
    EntrepriseComponent,
    OutputComponent,
    OutputEquipementComponent,
    OutputEnvironnementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
