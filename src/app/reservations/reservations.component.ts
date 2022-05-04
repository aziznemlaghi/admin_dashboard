import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {ReservationService} from './reservation.service';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../app.main.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: any;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router , private reservationService: ReservationService, public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(data => {
      this.reservations = data;
      console.log(this.reservations);
    });  }


  acceptReservation(): void {
      const status = 'accepted';
      this.reservationService.updateReservation(this.reservations)
        .subscribe(data => {
          this.reservations.status = status;
          alert('Reservation successfully accepted.');
          this.router.navigate(['/pages/service']);
        });

  }

    refuseReservation(reservation: any) {
    }
}
