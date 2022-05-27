import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-index-backend',
  templateUrl: './index-backend.component.html',
  styleUrls: ['./index-backend.component.css']
})
export class IndexBackendComponent implements OnInit {
  user = new User;
  constructor(private tokenStorageService: TokenService) { }

  ngOnInit(): void {
    const userData = this.tokenStorageService.getUser();
      this.user = userData;
  }

}
