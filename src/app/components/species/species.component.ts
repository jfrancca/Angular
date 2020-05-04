import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Species, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  
  public palabra: String = '';
  public species: Result[] = [];
  public filtroSpecies: Result[] = [];
  public route = "../../assets/species/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getSpecies();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.species.filter(specie => specie.name == text);
      this.species = filtro;
    } else {
      this.species = this.filtroSpecies;
    }
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
      this.filtroSpecies = resp.results;
    });
  }

}

