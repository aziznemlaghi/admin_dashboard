import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<any>('http://localhost:3000/user/findUsers');
  }
}
