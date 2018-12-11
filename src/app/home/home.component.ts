import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  velosTop3 = [];
  velos = [];
  constructor() { }

  ngOnInit() {
    this.generateTableTop3();
    this.generateTableAnnounce();
  }

  generateTableTop3() {
    for (let i = 2; i < 5; i++) {
      this.velosTop3.push(
        {
          "veloPic": environment.imagesURL + "velo" + i + ".jpeg",
          "userPic": environment.imagesURL + "user" + i + ".jpeg",
          "pseudo": "pseudo" + i
        }
      );
    };
  }

  generateTableAnnounce() {
    for (let i = 2; i < 11; i++) {
      this.velos.push(
        {
          "veloPic": environment.imagesURL + "velo" + i + ".jpeg",
          "userPic": environment.imagesURL + "user" + i + ".jpeg",
          "pseudo": "pseudo" + i
        }
      );
    };
  }

}




