import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Films, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  
  public palabra: String = '';
  public films: Result[] = [];
  public filtroFilms: Result[] = [];
  public route = "../../assets/starwars/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getFilm();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.films.filter(film => film.title == text)
      this.films = filtro;
    } else {
      this.films = this.filtroFilms;
    }
  }

  private async getFilm() {
    await this.swapi.getFilms().pipe(
      map((resp: any) => {
        const result: Films = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.title + ".png";
        });
        return result;
      })
    ).subscribe( (resp: Films) => {
      console.log(resp.results);
      this.films = resp.results;
      this.filtroFilms = resp.results;
    });
  }

}
