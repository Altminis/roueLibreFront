import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/model/Annonce';
import { AnnoncesService } from 'src/app/service/annonces-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ma-location',
  templateUrl: './ma-location.component.html',
  styleUrls: ['./ma-location.component.css']
})
export class MaLocationComponent implements OnInit {

  annonce: Annonce;
  errorMessage : string;

  constructor(private annonceService: AnnoncesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      p => { this.refreshAnnonce(p.id) }
    )
  }

  refreshAnnonce(p) {
    this.annonceService.getAnnonce(p).subscribe(
      (annonce: Annonce) => {
        this.annonce = annonce;

      }
    )
  }

  getUrlPhoto(namePhoto: string) {
    return environment.imagesURL + namePhoto
  }

  supprimerAnnonce(){

    this.annonceService.deleteAnnonceById(this.annonce.id).subscribe(
      _=>{
        alert('l\'annonce a été supprimée');
        this.router.navigate(['/myaccount']);
      },
      error => this.errorMessage = error
    )
  }

}
