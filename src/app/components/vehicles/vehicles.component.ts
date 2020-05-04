import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Vehicles, Result } from 'src/app/interfaces/vehicles.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  
  public palabra: String = '';
  public vehicles: Result[] = [];
  public filtroVehicles: Result[] = [];
  public route = "../../assets/vehicles/";

  constructor(private swapi: SwapiService) { }
 
  ngOnInit(): void {
    this.getVehicles();
  }

  public search(text: string) {
    if (text.length > 0) {
      this.palabra = text;
      var filtro: Result[] = this.vehicles.filter(vehicle => vehicle.name == text);
      this.vehicles = filtro;
    } else {
      this.vehicles = this.filtroVehicles;
    }
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
      this.filtroVehicles = resp.results;
    });
  }

}


    
  


