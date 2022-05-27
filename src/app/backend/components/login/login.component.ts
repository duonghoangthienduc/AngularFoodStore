import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authenticationService/authentication.service';
import { TokenService } from 'src/app/services/tokenService/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any = {userName:null ,userPass:null};

  user = new User;

  isLoggedIn = false;
  isLoginFailed = false;



  constructor(private authService: AuthenticationService,
              private tokenStorage: TokenService,
              private message: NzMessageService,
              private notification: NzNotificationService,
              ){ }

  ngOnInit(): void {
    if (this.tokenStorage.getUser() != null) {
      this.isLoggedIn = true;
    }
  }


  submitForm(): void {
    const { username, password } = this.LoginForm;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        this.notification.success('Chào mừng trở lại '+data.firstName,'');

      },
      error: err => {
        this.message.error('Login failuer');
        this.isLoginFailed = true;
      }
    });
    }
    reloadPage(): void {
      window.location.reload();
    }
}


