import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/service/annonces-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/model/Annonce';
import { Photo } from 'src/app/model/Photo';
import { VehiculeService } from 'src/app/service/vehicule.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annonce : Annonce;

  constructor(private annonceService : AnnoncesService, private route: ActivatedRoute, private router : Router,private vehiculeService: VehiculeService ){
  }

  ngOnInit(){
    this.route.params.subscribe(
      p => {this.refreshAnnonce(p.id)}
    ) 
  }

  refreshAnnonce(p){
    this.annonceService.getAnnonce(p).subscribe(
      (annonce: Annonce) => {
        this.annonce = annonce;
    
      } 
    )
  }

  getCivilite(num : number) : string {
    return num === 1 ? "madame" : "monsieur"
  }

  getUrlPhoto(photo: Photo){
    return this.vehiculeService.getUrlPhoto(photo);
  }

}
