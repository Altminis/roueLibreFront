import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../model/Vehicule';
import { AuthService } from '../service/auth-service.service';
import { User } from '../model/User';
import { VehiculeService } from '../service/vehicule.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {
private vehicules: Vehicule[];
private user: User;

  constructor(private authService: AuthService, private vehiculeService: VehiculeService) {   }

  ngOnInit() {
    this.user = this.authService.user;
    this.vehiculeService.getVehicules(this.user)
      .subscribe(vehicules => 
        this.vehicules = vehicules);
   
  }

  getUrlPhoto(namePhoto: string){
    return environment.imagesURL + namePhoto;
  }

  

}
