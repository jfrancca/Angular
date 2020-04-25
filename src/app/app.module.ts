import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiService } from './services/swapi.service';
import { HttpClientModule } from "@angular/common/http";
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpeciesComponent } from './components/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PeopleComponent,
    NavbarComponent,
    SpeciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
