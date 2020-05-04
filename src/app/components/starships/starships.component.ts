import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Starships, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  
  public palabra: String = '';
  public starships: Result[] = [];
  public filtroStarships: Result[] = [];
  public route = "../../assets/Starships/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getStarships();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.starships.filter(starship => starship.name == text);
      this.starships = filtro;
    } else {
      this.starships = this.filtroStarships;
    }
  }

  private async getStarships() {
    await this.swapi.getStarships().pipe(
      map((resp: any) => {
        const result: Starships = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.name + ".png";
        });
        return result;
      })
    ).subscribe( (resp: Starships) => {
      console.log(resp.results);
      this.starships = resp.results;
      this.filtroStarships = resp.results;
    });
  }

}

