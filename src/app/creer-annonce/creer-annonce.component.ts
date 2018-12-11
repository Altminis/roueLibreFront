import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  annonceForm : FormGroup;
  debutCtrl : FormControl;

  constructor(private fb : FormBuilder) {
    this.annonceForm = fb.group({
      debut : this.debutCtrl
    })
   }

  ngOnInit() {
  }

  ajouterAnnonce(){
    if(this.annonceForm.valid){

    }
  }

}
