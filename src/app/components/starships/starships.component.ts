import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Starships, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public starships: Result[] = [];
  public route = "../../assets/Starships/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getStarships();
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
    });
  }

}
