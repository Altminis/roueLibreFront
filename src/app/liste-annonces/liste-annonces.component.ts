import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../service/annonces-service.service';
import { Annonce } from '../model/Annonce';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculeService } from '../service/vehicule.service';
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {

  annonces : MatTableDataSource<Annonce>
  displayedColumns: string[] = ['loueur', 'categorie', 'image', 'date', 'detail'];

  constructor(private annonceService : AnnoncesService, private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.refreshAnnonces();
  }

  refreshAnnonces() {
    this.annonceService.getAnnonces().subscribe(
      (annonces: Annonce[]) => {
        this.annonces = new MatTableDataSource(annonces);
      }
    )
  }

  getUrlPhoto(photo: Photo){
    return this.vehiculeService.getUrlPhoto(photo);
  }

  

}
