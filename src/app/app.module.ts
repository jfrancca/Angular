import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiService } from './services/swapi.service';
import { HttpClientModule } from "@angular/common/http";
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    NavbarComponent,
    SpeciesComponent,
    VehiclesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
