import {Component} from '@angular/core';
import {BreadcrumbService} from '../app.breadcrumb.service';
import {AppMainComponent} from '../app.main.component';

@Component({
    templateUrl: './app.invoice.component.html'
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService, public app: AppMainComponent) {
        this.breadcrumbService.setItems([
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }
}
