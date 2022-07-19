import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSummernoteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
