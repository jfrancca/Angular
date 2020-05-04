import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { People, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  
  public palabra: String = '';
  public people: Result[] = [];
  public filtroPeople: Result[] = [];
  public route = "../../assets/people/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getPeopl();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.people.filter(peopl => peopl.name == text)
      this.people = filtro;
    } else {
      this.people = this.filtroPeople;
    }
  } 

  private async getPeopl() {
    await this.swapi.getPeople().pipe(
      map((resp: any) => {
        const result: People = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.name + ".png";
        });
        return result;
      })
    ).subscribe( (resp: People) => {
      console.log(resp.results);
      this.people = resp.results;
      this.filtroPeople = resp.results;
    });
  }

}
