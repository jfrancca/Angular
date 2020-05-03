import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from "./components/starships/starships.component";


const routes: Routes = [
  {path:'Peliculas', component: FilmsComponent},
  {path:'Personajes', component: PeopleComponent},
  {path:'Planetas', component: PlanetsComponent},
  {path:'Especies', component: SpeciesComponent},
  {path:'Naves', component: StarshipsComponent},
  {path:'Vehiculos', component: VehiclesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
