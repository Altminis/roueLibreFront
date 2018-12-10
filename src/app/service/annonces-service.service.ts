import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/Annonce';
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient, private userService : UserService) { }

  getAnnonces() : Observable<Annonce[]> {
    return this.http.get<Annonce[]>(environment.backURL + '/annonces');
  }

  getAnnonce(id) : Observable<Annonce> {
    return this.http.get<Annonce>(environment.backURL + '/annonces/' + id);
  }

  addAnnonce(annonce){
    return this.http.post(environment.backURL + '/annonces', annonce);
  }

  deleteAnnonceById(id : number) {
    return this.http.delete(environment.backURL + '/annonces/' + id);
  }
}
