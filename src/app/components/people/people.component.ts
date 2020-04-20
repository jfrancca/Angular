import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { People, Result } from 'src/app/interfaces/swapi.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public people: Result[] = [];
  public route = "../../assets/people/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getPeopl();
  }

  private async getPeopl() {
    await this.swapi.getPeople().pipe(
      map((resp: any) => {
        const result: People = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.title + ".png";
        });
        return result;
      })
    ).subscribe( (resp: People) => {
      console.log(resp.results);
      this.people = resp.results;
    });
  }

}
