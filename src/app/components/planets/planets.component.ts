import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Planets, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planets: Result[] = [];
  public route = "../../assets/planets/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getPlanet();
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
    });
  }

}
