import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { User } from '../model/User';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
private user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    debugger;
    this.user = this.authService.user;
  }

}
