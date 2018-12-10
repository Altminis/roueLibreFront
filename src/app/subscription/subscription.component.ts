import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../service/user-service.service';

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
  pristineEmail = true;
  prenom = new FormControl('');
  nom = new FormControl('');
  password = new FormControl('');


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkEmail(event: any) {
    this.emailValue = event.target.value;
    this.emailValue === '' ? this.pristineEmail = true : this.pristineEmail = false;
    this.userService.getUserByPseudo(this.emailValue).subscribe(
      user => {
        user == null ? this.emailIsValid = true : this.emailIsValid = false;
      }
    )
  }

  checkPseudo(event: any) {
    this.pseudoValue = event.target.value;
    this.pseudoValue === '' ? this.pristinePseudo = true : this.pristinePseudo = false;
    this.userService.getUserByPseudo(this.pseudoValue).subscribe(
      user => {
        user == null ? this.pseudoIsValid = true : this.pseudoIsValid = false;
      }
    )
  }

}
