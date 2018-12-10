import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(environment.backURL + '/users');
  }

  getUser(id) : Observable<User> {
    return this.http.get<User>(environment.backURL + '/users/' + id);
  }

  addUser(user){
    return this.http.post(environment.backURL + '/users', user);
  }

  deleteUserById(id : number) {
    return this.http.delete(environment.backURL + '/users/' + id);
  }

  getUserByPseudo(term: string): Observable<User> {
    return this.http.get<User[]>(`${environment.backURL}/users/?pseudo=${term}`)
    .pipe(
      map(users => users[0]));
  }

  getUserByEmail(term: string): Observable<User>{
    return this.http.get<User[]>(`${environment.backURL}/users/?mail=${term}`)
    .pipe(
      map(users => users[0]));
  }

  updateUser (user: User): Observable<any> {
    console.log(user);
    return this.http.put(environment.backURL + '/users/' + user.id, user);
  }
}