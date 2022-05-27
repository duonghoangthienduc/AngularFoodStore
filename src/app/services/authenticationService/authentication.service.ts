import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTH_API ='http://localhost:1803/login';



  constructor(private http: HttpClient) {}

  login(userName: string, userPass: string): Observable<any> {
    return this.http.post(this.AUTH_API + '/signin', {
      userName,
      userPass
    }, httpOptions);
  }

}
