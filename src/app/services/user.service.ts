import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {

  }

  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
