import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  isLoggedIn = false;
  user = new User;
  isCollapsed = false;

  constructor(private tokenStorageService: TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getUser();
    if (this.isLoggedIn) {
      const userData = this.tokenStorageService.getUser();
      this.user = userData;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
