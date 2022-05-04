import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {Service} from '../models/service.model';
import { ServiceService } from './service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './add-service.component.html'
})
export class AddServiceComponent {
    @ViewChild('form') form: NgForm;

  service: any = new Service();

  constructor(private router: Router, private serviceService: ServiceService) {

  }

  createService(): void {
    this.serviceService.createService(this.service)
        .subscribe( data => {
          alert('Service created successfully.');
          this.router.navigate(['/pages/service']);
        });

  }

}
