import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Planets, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  
  public palabra: String = '';
  public planets: Result[] = [];
  public filtroPlanets  : Result[] = [];
  public route = "../../assets/planets/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getPlanet();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.planets.filter(planet => planet.name == text);
      this.planets = filtro;
    } else {
      this.planets = this.filtroPlanets;
    }
  }

  private async getPlanet() {
    await this.swapi.getPlanets().pipe(
      map((resp: any) => {
        const result: Planets = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.name + ".png";
        });
        return result;
      })
    ).subscribe( (resp: Planets) => {
      console.log(resp.results);
      this.planets = resp.results;
      this.filtroPlanets = resp.results;
    });
  }

}