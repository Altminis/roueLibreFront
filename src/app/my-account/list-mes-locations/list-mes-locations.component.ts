import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Annonce } from 'src/app/model/Annonce';
import { AnnoncesService } from 'src/app/service/annonces-service.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-list-mes-locations',
  templateUrl: './list-mes-locations.component.html',
  styleUrls: ['./list-mes-locations.component.css']
})
export class ListMesLocationsComponent implements OnInit {

  annonces : MatTableDataSource<Annonce>
  displayedColumns: string[] = ['vehicule', 'categorie', 'image', 'date', 'detail'];

  constructor(private annonceService : AnnoncesService, private authService : AuthService) { }

  ngOnInit() {
    this.refreshAnnonces();
  }

  refreshAnnonces() {
    this.annonceService.getAnnoncesByUser(this.authService.user.id).subscribe(
      (annonces: Annonce[]) => {
        this.annonces = new MatTableDataSource(annonces);
      }
    )
  }

  getUrlPhoto(namePhoto : string){
    return environment.imagesURL + namePhoto
  }

}
