import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage : string;

  ngOnInit(): void {}

  pseudoCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder, private  authService : AuthService) {
    this.pseudoCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      pseudo: this.pseudoCtrl,
      password: this.passwordCtrl
    });
  }

  register() {
    this.authService.signIn(this.userForm.get('pseudo').value,this.userForm.get('password').value)
    .subscribe(isAuth => {
      if(isAuth){
        this.errorMessage = null;
        console.log("bien ouej")
        //Redirection sur l'accueil
      } else {
        this.errorMessage = "La connexion a echoué, vérifiez votre pseudo et votre mot de passe";
      }
    });
    
  }
}
