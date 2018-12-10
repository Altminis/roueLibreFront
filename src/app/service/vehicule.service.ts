import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../model/Vehicule';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http : HttpClient) { }

  getVehicules() : Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(environment.backURL + '/vehicules');
  }

  getVehicule(id) : Observable<Vehicule> {
    return this.http.get<Vehicule>(environment.backURL + '/vehicules/' + id);
  }

  addVehicules(vehicules){
    return this.http.post(environment.backURL + '/vehicules', vehicules);
  }

  deleteVehculesById(id : number) {
    return this.http.delete(environment.backURL + '/vehicules/' + id);
  }
}
