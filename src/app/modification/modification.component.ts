import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth-service.service';
import { UserService } from '../service/user-service.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  private user: User;
  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  pseudoCtrl: FormControl;
  emailCtrl: FormControl;
  descriptionCtrl: FormControl;
  updateUserForm: FormGroup;


  constructor(private userService: UserService, private authService: AuthService, private location: Location, private formB: FormBuilder) {
    this.user = this.authService.user;
    this.nomCtrl = formB.control(this.user.nom,Validators.required);
    this.prenomCtrl = formB.control(this.user.prenom,Validators.required);
    this.pseudoCtrl = formB.control(this.user.pseudo,Validators.required);
    this.emailCtrl = formB.control(this.user.mail,[Validators.email,Validators.required]);
    this.descriptionCtrl = formB.control(this.user.description);
    this.updateUserForm = formB.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      pseudo: this.pseudoCtrl,
      email: this.emailCtrl,
      description: this.descriptionCtrl
    })
  }

  ngOnInit() {
    
  }

  modifyUser(): void {
    if(this.updateUserForm.valid){
    this.user.nom = this.updateUserForm.get('nom').value,
    this.user.prenom = this.updateUserForm.get('prenom').value,
    this.user.pseudo = this.updateUserForm.get('pseudo').value,
    this.user.mail = this.updateUserForm.get('email').value,
    this.user.description = this.updateUserForm.get('description').value,
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack(),
        error => console.log(error));
  }
}

  goBack() {
    this.location.back();
  }
}
