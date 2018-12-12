import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../service/annonces-service.service';
import { Annonce } from '../model/Annonce';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {

  annonces : MatTableDataSource<Annonce>
  displayedColumns: string[] = ['loueur', 'categorie', 'image', 'date', 'detail'];

  constructor(private annonceService : AnnoncesService) { }

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

  getUrlPhoto(namePhoto : string){
    return environment.imagesURL + namePhoto
  }

}
