import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
    templateUrl: './overlaysdemo.component.html',
    providers: [ConfirmationService]
})
export class OverlaysDemoComponent implements OnInit {

    cols: any[];

    images: any[];

    display: boolean;

    constructor( private confirmationService: ConfirmationService) {}
    ngOnInit() {

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.images = [];
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
        });
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    }
}
