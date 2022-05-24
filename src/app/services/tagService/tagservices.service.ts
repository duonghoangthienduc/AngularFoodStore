import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag.model';
@Injectable({
  providedIn: 'root'
})
export class TagservicesService {
  httpOption={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  };
  apiUrl ='http://localhost:1803/tag';
  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl).pipe();
  }
}
