import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Species, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  public species: Result[] = [];
  public route = "../../assets/Species/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getSpecies();
  }

  private async getSpecies() {
    await this.swapi.getSpecies().pipe(
      map((resp: any) => {
        const result: Species = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.name + ".png";
        });
        return result;
      })
    ).subscribe( (resp: Species) => {
      console.log(resp.results);
      this.species = resp.results;
    });
  }

}
