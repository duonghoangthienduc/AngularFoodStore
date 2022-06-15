import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  httpOption={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiUrl ='http://localhost:1803/category';
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe();
  }
}
