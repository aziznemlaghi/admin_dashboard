import {Component, OnDestroy} from '@angular/core';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';
import { BreadcrumbService } from '../app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import {AuthService} from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnDestroy{

    subscription: Subscription;

    items: MenuItem[];

    // tslint:disable-next-line:max-line-length
    constructor(public breadcrumbService: BreadcrumbService, private router: Router, private authService: AuthService, public app: AppComponent, public appMain: AppMainComponent) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    signOut() {
        this.authService.logout();
    }
}
