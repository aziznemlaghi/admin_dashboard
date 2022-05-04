import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

import { ServiceService } from './service.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './update-service.component.html',
})
export class UpdateServiceComponent implements OnInit {

  service: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private serviceService: ServiceService, public app: AppComponent, public appMain: AppMainComponent) {
  }

  ngOnInit() {
    this.serviceService.getService(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.service = data;
      });
  }

  updateService(): void {
    this.serviceService.updateService(this.service)
      .subscribe(data => {
        alert('Employee updated successfully.');
        this.router.navigate(['/pages/service']);
      });

  }
  }
