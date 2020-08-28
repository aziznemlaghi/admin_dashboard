import {Component} from '@angular/core';
import {BreadcrumbService} from '../breadcrumb.service';

@Component({
    templateUrl: './typography.component.html'
})
export class TypographyComponent {
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Typography'}
        ]);
    }
}
