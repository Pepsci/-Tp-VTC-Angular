import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/components/header/header.component';
import { NavBarComponent } from './content/components/nav-bar/nav-bar.component';
import { FooterComponent } from './content/components/footer/footer.component';
import { SideBarComponent } from './content/components/side-bar/side-bar.component';
import { ConducteurComponent } from './content/components/menu/conducteur/conducteur.component';
import { VehiculeComponent } from './content/components/menu/vehicule/vehicule.component';
import { ListConducteurVehiculeComponent } from './content/components/list-conducteur-vehicule/list-conducteur-vehicule.component';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    ConducteurComponent,
    VehiculeComponent,
    ListConducteurVehiculeComponent,
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
