import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';
const httpOption={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class BillService {

  AllBill = 'http://localhost:1803/bill';
  NewBill = 'http://localhost:1803/bill/new-bill'

  constructor(private http:HttpClient) { }

  getAllBill(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${this.AllBill}`);
  }

  AddNewBill(billId:any, userId:any, cartId:any): Observable<any>{
    return this.http.post(`${this.NewBill}`, { billId, userId, cartId }, httpOption );
  }

}
