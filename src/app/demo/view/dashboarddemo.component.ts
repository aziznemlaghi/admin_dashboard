import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboarddemo.scss'],
})
export class DashboardDemoComponent implements OnInit {

    cols: any[];

    items: MenuItem[];

    ordersChart: any;

    ordersChartOptions: any;

    orderWeek: any;

    selectedOrderWeek: any;

    products: Product[];

    revenueChart: any;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.items = [{
            label: 'Shipments',
            items: [
                { label: 'Tracker', icon: 'pi pi-compass' },
                { label: 'Map', icon: 'pi pi-map-marker' },
                { label: 'Manage', icon: 'pi pi-pencil' }
            ]
        }
        ];

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New',
                data: [2, 7, 20, 9, 16, 9, 5],
                backgroundColor: [
                    'rgba(100, 181, 246, 0.2)',
                ],
                borderColor: [
                    '#64B5F6',
                ],
                borderWidth: 3,
                fill: true
            }]
        };

        this.ordersChartOptions = {
            legend: {
                display: true,
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 20
                    }
                }]
            }
        };

        this.orderWeek = [
            {name: 'This Week', code: '0'},
            {name: 'Last Week', code: '1'}
        ];

        this.revenueChart = {
            labels: ['Direct', 'Promoted', 'Affiliate'],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC']
            }]
        };
    }

    changeDataset(event) {
        const dataSet = [
            [2, 7, 20, 9, 16, 9, 5],
            [2, 4, 9, 20, 16, 12, 20],
            [2, 17, 7, 15, 4, 20, 8],
            [2, 2, 20, 4, 17, 16, 20]
        ];

        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
        this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');
    }
}
