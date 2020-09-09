import {Component} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html'
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Documentation'}
        ]);
    }
}
