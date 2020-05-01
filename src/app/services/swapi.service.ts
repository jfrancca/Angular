import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from "../../environments/environment";
import { Films } from '../interfaces/swapi.interface';
import { People } from '../interfaces/swapi.interface';
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

  public getPlanets(){
    let uri = this.url + "planets/"
    // console.log(this.http.get(uri));

    return this.http.get<Planets>(uri);
  }


}
