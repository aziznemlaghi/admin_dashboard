import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public getReservations() {
    return this.http.get<any>('http://localhost:3000/reservation/findReservations');
  }

  public updateReservation(reservation) {
    return this.http.patch<any>('http://localhost:3000/service/updateService/625d33c73407cda15ff1a8c9' , reservation);
  }

}
