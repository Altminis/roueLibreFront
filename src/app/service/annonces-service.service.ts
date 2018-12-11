import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, defer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/Annonce';
import { map } from 'rxjs/operators';
import { UserService } from './user-service.service';
import { VehiculeService } from './vehicule.service';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient, private userService: UserService, private vehiculeService: VehiculeService) { }

  getAnnonces(): Observable<Annonce[]> {
    return defer(async () => {
      const annonces = await this.http.get<Object[]>(environment.backURL + '/annonces').toPromise();
      for (let annonce of annonces) {
        const user = await this.userService.getUser(annonce['loueurId']).toPromise();
        delete annonce['loueurId'];
        annonce['loueur'] = user;

        const vehicule = await this.vehiculeService.getVehicule(annonce['vehiculeId']).toPromise();
        delete annonce['vehiculeId'];
        annonce['vehicule'] = vehicule;
      }
      return annonces as Annonce[];
    });
  }

  getAnnonce(id): Observable<Annonce> {
    return defer(async () => {
      const annonce = await this.http.get<Object>(environment.backURL + '/annonces/' + id).toPromise();
      const user = await this.userService.getUser(annonce['loueurId']).toPromise();
      delete annonce['loueurId'];
      annonce['loueur'] = user;
      const vehicule = await this.vehiculeService.getVehicule(annonce['vehiculeId']).toPromise();
      delete annonce['vehiculeId'];
      annonce['vehicule'] = vehicule;
      return annonce as Annonce;
    });
  }

  addAnnonce(annonce) {
    return this.http.post(environment.backURL + '/annonces', annonce);
  }

  deleteAnnonceById(id: number) {
    return this.http.delete(environment.backURL + '/annonces/' + id);
  }
}
