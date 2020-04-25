import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from "../../environments/environment";
import { Films } from '../interfaces/swapi.interface';
import { People } from '../interfaces/swapi.interface';
import { Species } from '../interfaces/swapi.interface';
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


}
