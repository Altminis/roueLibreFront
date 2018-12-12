import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { VehiculeService } from '../service/vehicule.service';
import { Vehicule } from '../model/Vehicule';
import { AuthService } from '../service/auth-service.service';
import { Annonce } from '../model/Annonce';
import { AnnoncesService } from '../service/annonces-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  vehicules: Vehicule[];

  annonceForm: FormGroup;
  debutCtrl: FormControl;
  finCtrl: FormControl;
  vehiculeCtrl: FormControl;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private vehiculeService: VehiculeService,
    private annonceService: AnnoncesService,
    private router : Router) {
    this.debutCtrl = fb.control('', Validators.required);
    this.finCtrl = fb.control('', Validators.required);
    this.vehiculeCtrl = fb.control('', Validators.required);
    this.annonceForm = fb.group({
      debut: this.debutCtrl,
      fin: this.finCtrl,
      vehicule: this.vehiculeCtrl
    })
  }

  ngOnInit() {
    this.vehiculeService.getVehicules(this.authService.user)
      .subscribe(vehicules =>
        this.vehicules = vehicules);
  }

  ajouterAnnonce() {
    if (this.annonceForm.valid) {
      const annonce: Annonce = new Annonce();
      annonce.debut = this.annonceForm.get('debut').value as Date;
      annonce.fin = this.annonceForm.get('fin').value as Date;
      annonce.userId = this.authService.user.id;
      annonce.vehiculeId = this.annonceForm.get('vehicule').value;
      this.annonceService.addAnnonce(annonce).subscribe(
        _ => this.router.navigate(['/myaccount'])
      )
    }
  }

}
