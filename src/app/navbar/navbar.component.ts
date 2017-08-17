import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { jwt } from 'jsonwebtoken';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    return this.authService.logout();
  }

  ngOnInit() {
  }

  // findUsername() {
  //   return ;
  // }
}
