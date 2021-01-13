import {Component} from '@angular/core';
import {BreadcrumbService} from '../app.breadcrumb.service';
import {AppComponent} from '../app.component';

@Component({
    templateUrl: './app.invoice.component.html'
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService, public app: AppComponent) {
        this.breadcrumbService.setItems([
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }
}
