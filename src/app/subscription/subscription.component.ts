import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  prenom = new FormControl('');
  nom = new FormControl('');
  pseudo = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
