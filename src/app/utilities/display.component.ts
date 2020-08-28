import {Component} from '@angular/core';
import {BreadcrumbService} from '../breadcrumb.service';

@Component({
    templateUrl: './display.component.html'
})
export class DisplayComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Display'}
        ]);
    }
}
