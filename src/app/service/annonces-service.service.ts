import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, defer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/Annonce';
import { UserService } from './user-service.service';
import { VehiculeService } from './vehicule.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient, private userService: UserService, private vehiculeService: VehiculeService) { }

  getAnnonces(): Observable<Annonce[]> {
    const annonces = this.http.get<Annonce[]>(environment.backURL + '/annonces?_expand=user&_expand=vehicule').pipe(
      map(annonces => {
        annonces.forEach(annonce => {
          annonce['debut'] = new Date(+annonce['debut'])
          annonce['fin'] = new Date(+annonce['fin'])
        });
        return annonces;
      }));
    return annonces as Observable<Annonce[]>;
  }

  getAnnoncesByUser(id: number): Observable<Annonce[]> {
    const annonces = this.http.get<Annonce[]>(environment.backURL + '/annonces?userId='+id+'&_expand=user&_expand=vehicule').pipe(
      map(annonces => {
        annonces.forEach(annonce => {
          annonce['debut'] = new Date(+annonce['debut'])
          annonce['fin'] = new Date(+annonce['fin'])
        });
        return annonces;
      }));
    return annonces as Observable<Annonce[]>;
  }

  getAnnonce(id): Observable<Annonce> {
    const annonce = this.http.get<Object>(environment.backURL + '/annonces/' + id + '?_expand=user&_expand=vehicule').pipe(
      map(annonce => {
        annonce['debut'] = new Date(annonce['debut'])
        annonce['fin'] = new Date(annonce['fin'])
        return annonce;
      }));
    return annonce as Observable<Annonce>;
  }

  addAnnonce(annonce) {
    annonce['debut'] = annonce['debut'].getTime();
    annonce['fin'] = annonce['fin'].getTime();
    return this.http.post(environment.backURL + '/annonces', annonce);
  }

  deleteAnnonceById(id: number) {
    return this.http.delete(environment.backURL + '/annonces/' + id);
  }
}
