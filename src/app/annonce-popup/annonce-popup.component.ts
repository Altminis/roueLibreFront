import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-annonce-popup',
  templateUrl: './annonce-popup.component.html',
  styleUrls: ['./annonce-popup.component.css']
})
export class AnnoncePopupComponent implements OnInit {

  userPic = environment.imagesURL + "user2.jpeg";
  veloPic = environment.imagesURL + "velo2.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
