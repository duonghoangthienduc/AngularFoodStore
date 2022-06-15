import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl ='http://localhost:1803/login';

  newCus = 'http://localhost:1803/login/registerCustomer';

  getCus = 'http://localhost:1803/login/getCustomers';

  constructor(private http:HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }

  getCustomers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.getCus}`);
  }

  addNewCus(userId:any, firstName: any, lastName: any, middleName: any, phone: any, email: any, address: any)
  :Observable<any>{
    return this.http.post(`${this.newCus}`,
    { userId, firstName, lastName, middleName, phone, email, address }, httpOptions);
  }

}
