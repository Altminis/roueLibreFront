import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user-service.service';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuth = false;

  user: User;

  public constructor(private router: Router, private userService: UserService) { }

  signIn(pseudo: string, password: string): Observable<boolean> {
    return this.userService.getUserByPseudo(pseudo)
    .pipe(
      map(user => {
        this.user = user;
        this.isAuth = user != null && user.password === password;
        return this.isAuth;
      }));
  }

  signOut() {
    this.isAuth = false;
    this.user = null;
    this.router.navigate(['/accueil']);
  }


}
