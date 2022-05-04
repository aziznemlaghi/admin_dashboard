import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

import { ServiceService } from './service.service';
import {Service} from '../models/service.model';

@Component({
  selector: 'app-service-read',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']

})
export class ServiceComponent implements OnInit {

  services: any;

  constructor(private router: Router, private serviceService: ServiceService, public app: AppComponent, public appMain: AppMainComponent) {

  }

  ngOnInit() {
    this.serviceService.getServices()
      .subscribe( data => {
        this.services = data;
        console.log(this.services);
      });
  }

  deleteService(service: Service): void {
    this.serviceService.deleteService(service)
      .subscribe( data => {
        this.services = this.services.filter(u => u !== service);
      });
  }

}
