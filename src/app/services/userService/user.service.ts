import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl ='http://localhost:1803/login';

  constructor(private http:HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

}
