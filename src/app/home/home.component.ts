import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numeros= ["1", "2", "3"];
  velos= [];
  constructor() { }

  ngOnInit() {
    for(let i = 2; i <11; i++){
      this.velos.push(environment.imagesURL + "velo"+i+".jpeg");
    }
  }

}
