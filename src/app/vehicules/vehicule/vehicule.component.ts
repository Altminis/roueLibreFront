import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/service/auth-service.service';
import { User } from 'src/app/model/User';
import { Vehicule } from 'src/app/model/Vehicule';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  private vehicule: Vehicule;
  private user: User;


  constructor(private vehiculeService: VehiculeService , private route: ActivatedRoute, private router : Router, private authService: AuthService) { }

  ngOnInit(){
    this.user = this.authService.user;
    this.route.params.subscribe(
      p => {this.refreshVehicule(p.id)}
    ) 
  }

  refreshVehicule(p){
    this.vehiculeService.getVehicule(p).subscribe(
      (vehicule: Vehicule) => {
        this.vehicule = vehicule;
    
      } 
    )
  }
  getUrlPhoto(namePhoto: string){
    return environment.imagesURL + namePhoto;
  }
}
