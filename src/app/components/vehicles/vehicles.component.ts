import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { map } from 'rxjs/operators';
import { Vehicles, Result } from "../../interfaces/vehicles.interface";


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Result[];
  public route =  "../../assets/vehicles/";

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  private async getVehicles() {
    await this.swapi.getVehicles().pipe(
      map((resp: any) => {
        const result: Vehicles = resp;
        result.results.forEach(element => {
          element.image = element.image = this.route + element.name + ".png";
        });
        return result;
      })
    ).subscribe( (resp: Vehicles) => {
      console.log(resp.results);
      this.vehicles = resp.results;
    });
  }

}
  

    
  


