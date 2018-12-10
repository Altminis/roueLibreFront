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
  codepostal = new FormControl('');
  adresse = new FormControl('');
  adresse2 = new FormControl('');
  email = new FormControl('');
  emailValue = '';
  emailIsValid = true;
  pristine = true;
  prenom = new FormControl('');
  nom = new FormControl('');
  pseudo = new FormControl('');
  pseudoValue = '';
  password = new FormControl('');


  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  checkEmail(event : any){
    this.emailValue = event.target.value;
    this.emailValue === '' ? this.pristine = true : this.pristine = false;
  }

}
