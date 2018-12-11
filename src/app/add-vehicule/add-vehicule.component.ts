import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../service/vehicule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';
import { User } from '../model/User';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehicule } from '../model/Vehicule';
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {
  private user: User;
  private vehicule: Vehicule;
  intituleCtrl: FormControl;
  marqueCtrl: FormControl;
  descriptionCtrl: FormControl;
  addVehiculeForm: FormGroup;
  selectedPhoto: Photo;
  photos: Photo[];



  constructor(private formB: FormBuilder, private vehiculeService: VehiculeService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.user = this.authService.user;
    this.intituleCtrl = formB.control('', Validators.required);
    this.marqueCtrl = formB.control('', Validators.required);
    this.descriptionCtrl = formB.control('', Validators.required);
    this.addVehiculeForm = formB.group({
      intitule: this.intituleCtrl,
      marque: this.marqueCtrl,
      description: this.descriptionCtrl
    })
  }

  ngOnInit() {
    this.vehiculeService.getAvailablePhotos().subscribe(photos => this.photos = photos);
  }

  addVehicule() {
    this.vehicule = {
        intitule: this.intituleCtrl.value,
        marque: this.marqueCtrl.value,
        description: this.descriptionCtrl.value,
        photo: this.selectedPhoto.name
    };
    this.vehiculeService.addVehicule(this.vehicule).subscribe(() => alert("Vehicule added !"));

  }

  selectPhoto(photo) {
    alert(photo.name);
    this.selectedPhoto = photo;
  }

}
