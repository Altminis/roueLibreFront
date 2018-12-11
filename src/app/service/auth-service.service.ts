import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  user: User;

  public constructor(private router: Router, private userService: UserService) { }

  signIn(pseudo: string, password: string): Observable<boolean> {
    return this.userService.getUserByPseudo(pseudo)
    .pipe(
      map(user => {       
        if(user != null && user.password === password){
          this.isAuth = true ;
          this.user = user;
        }      
        return this.isAuth;
      }));
  }

  signOut() {
    this.isAuth = false;
    this.user = null;
    this.router.navigate(['/accueil']);
  }
}
