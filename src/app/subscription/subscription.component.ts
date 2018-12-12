import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../service/user-service.service';
import { debounceTime } from 'rxjs/operators';
import { User } from '../model/User';
import { Adresse } from '../model/Adresse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  userForm: FormGroup;

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


  constructor(private userService: UserService, private fb: FormBuilder, private route: Router) { 
    this.userForm = fb.group({
      ville: this.ville,
      pays: this.pays,
      codepostal: this.codepostal,
      adresse: this.adresse,
      adresse2: this.adresse2,
      email: this.email,
      prenom: this.prenom,
      nom: this.nom,
      pseudo: this.pseudo,
      password: this.password
    })
  }

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

  inscription(){
    if(this.userForm.valid){
      const user: User = new User();
      user.prenom = this.userForm.get('prenom').value;
      user.nom = this.userForm.get('nom').value;
      user.pseudo = this.userForm.get('pseudo').value;
      user.mail = this.userForm.get('email').value;
      const adresse = new Adresse(this.userForm.get('adresse').value,
      this.userForm.get('adresse2').value,
      this.userForm.get('ville').value,
      this.userForm.get('codepostal').value,
      this.userForm.get('pays').value);
      user.adresses = [adresse];
      console.log(user);
      this.userService.addUser(user).subscribe(_ => this.route.navigate(['/accueil']), error => console.log(error));
    }
  }
  
}
