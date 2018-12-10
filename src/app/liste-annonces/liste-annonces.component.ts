import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../service/annonces-service.service';
import { Annonce } from '../model/annonce';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {

  annonces : Annonce[]

  constructor(private annonceService : AnnoncesService) { }

  ngOnInit() {
    this.refreshAnnonces();
  }

  refreshAnnonces() {
    this.annonceService.getAnnonces().subscribe(
      (annonces: Annonce[]) => {
        this.annonces = annonces;
      }
    )
  }

}
