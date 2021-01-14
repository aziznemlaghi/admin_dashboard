import {Component, OnInit} from '@angular/core';
import {SelectItem, PrimeIcons} from 'primeng/api';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {BreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './listdemo.component.html',
    styleUrls: ['./listdemo.scss']
})
export class ListDemoComponent implements OnInit {

    products: Product[];

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    sourceCities: any[];

    targetCities: any[];

    orderCities: any[];

    timelineEvents: any[];

    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'List'}
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.sourceCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];
        this.targetCities = [];

        this.orderCities = [
            {name: 'San Francisco', code: 'SF'},
            {name: 'London', code: 'LDN'},
            {name: 'Paris', code: 'PRS'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Berlin', code: 'BRL'},
            {name: 'Barcelona', code: 'BRC'},
            {name: 'Rome', code: 'RM'}];

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.timelineEvents = [
            {
                status: 'Ordered',
                date: '15/10/2020 10:30',
                icon: PrimeIcons.SHOPPING_CART,
                color: '#9C27B0',
                image: 'game-controller.jpg'
            },
            {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
        ];
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}
