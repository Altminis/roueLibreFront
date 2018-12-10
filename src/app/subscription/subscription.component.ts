import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../service/user-service.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  ville = new FormControl('');
  pays = new FormControl('');
  pseudo = new FormControl('');
  pseudoValue = '';
  pseudoIsValid;
  pristinePseudo = true;
  codepostal = new FormControl('');
  adresse = new FormControl('');
  adresse2 = new FormControl('');
  email = new FormControl('');
  emailValue = '';
  emailIsValid;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  pristineEmail = true;
  prenom = new FormControl('');
  nom = new FormControl('');
  password = new FormControl('');


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkEmail(event: any) {
    this.email.valueChanges.pipe(
      debounceTime(200)
    ).subscribe(
        newValue => {
          this.emailValue = newValue;
          this.emailValue === '' ? this.pristineEmail = true : this.pristineEmail = false;
          this.userService.getUserByEmail(this.emailValue).subscribe(
            user => {
              user == null && this.emailRegex.test(this.emailValue) ? this.emailIsValid = true : this.emailIsValid = false;
            }
          )
        }  )
  }

  checkPseudo(event: any) {
    this.pseudo.valueChanges.pipe(
      debounceTime(200)
    ).subscribe(
        newValue => {
          this.pseudoValue = newValue;
          this.pseudoValue === '' ? this.pristinePseudo = true : this.pristinePseudo = false;
          this.userService.getUserByPseudo(this.pseudoValue).subscribe(
            user => {
              user == null ? this.pseudoIsValid = true : this.pseudoIsValid = false;
            }
          )
        }
      )
  }

}
