import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, defer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/Annonce';
import { UserService } from './user-service.service';
import { VehiculeService } from './vehicule.service';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient, private userService: UserService, private vehiculeService: VehiculeService) { }

  getAnnonces(): Observable<Annonce[]> {
      const annonces =  this.http.get<Object[]>(environment.backURL + '/annonces?_expand=user&_expand=vehicule');
      return annonces as Observable<Annonce[]>;
  }

  getAnnonce(id): Observable<Annonce> {
      const annonce = this.http.get<Object>(environment.backURL + '/annonces/' + id + '?_expand=user&_expand=vehicule');
      return annonce as Observable<Annonce>;
  }

  addAnnonce(annonce) {
    return this.http.post(environment.backURL + '/annonces', annonce);
  }

  deleteAnnonceById(id: number) {
    return this.http.delete(environment.backURL + '/annonces/' + id);
  }
}
