import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from "../../environments/environment";
import { Films } from '../interfaces/swapi.interface';
import { People } from '../interfaces/swapi.interface';
import { Species } from '../interfaces/swapi.interface';
import { Vehicles } from '../interfaces/vehicles.interface';
import { Starships } from '../interfaces/swapi.interface';
import { Planets } from '../interfaces/swapi.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  

  private url = api;

  constructor(private http: HttpClient) { }

  public getFilms(){
    let uri = this.url + "films/"
    // console.log(this.http.get(uri));

    return this.http.get<Films>(uri);
  }

  public getPeople(){
    let uri = this.url + "people/"
    // console.log(this.http.get(uri));

    return this.http.get<People>(uri);
  }
  public getSpecies(){
    let uri = this.url + "species/"
    // console.log(this.http.get(uri));

    return this.http.get<Species>(uri);
  }
  public getVehicles(){
    let uri = this.url + "vehicles/"

    return this.http.get<Vehicles>(uri);
  }
  public getStarships(){
    let uri = this.url + "starships/"
    // console.log(this.http.get(uri));

    return this.http.get<Starships>(uri);
  }
  public getPlanets(){
    let uri = this.url + "planets/"

    return this.http.get<Planets>(uri);
  }
}
