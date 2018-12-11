import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../model/Vehicule';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';
import { Photo } from '../model/Photo';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }



  getVehicule(id): Observable<Vehicule> {
    return this.http.get<Vehicule>(environment.backURL + '/vehicules/' + id);
  }

  addVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(environment.backURL + '/vehicules', vehicule);
  }

  deleteVehculesById(id: number) {
    return this.http.delete(environment.backURL + '/vehicules/' + id);
  }

  getVehicules(user: User): Observable<Vehicule[]> {
    if (user === undefined) {
      return this.http.get<Vehicule[]>(environment.backURL + '/vehicules');

    } else {
      return this.http.get<Vehicule[]>(environment.backURL + `/users/${user.id}/vehicules`);
    }
  }

  getAvailablePhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(environment.backURL + `/photos`).pipe(
      map(photos => {
        photos.forEach(photo => photo.name = environment.imagesURL + photo.name);
        return photos;
      })
    );
  }

  
}
