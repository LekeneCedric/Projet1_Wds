import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitationsComponent } from './components/HABITATION/habitations/habitations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypesQuestionsComponent } from './components/TYPES-QUESTIONS/types-questions.component';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    NavbarComponent,
    HabitationsComponent,
    TypesQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
