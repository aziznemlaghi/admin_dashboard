import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit {

    lineData: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    ngOnInit() {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#b944d6'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#0F97C7'
                }
            ]
        };

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#0F97C7',
                    borderColor: '#0F97C7',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#e2841a',
                    borderColor: '#e2841a',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702, 421],
                    backgroundColor: [
                        '#0F97C7',
                        '#b944d6',
                        '#e2841a',
                        '#10b163'
                    ]
                }]
        };

        this.polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3
                ],
                backgroundColor: [
                    '#0F97C7',
                    '#b944d6',
                    '#e2841a',
                    '#10b163'
                ],
                label: 'My dataset'
            }],
            labels: [
                'Blue',
                'Purple',
                'Orange',
                'Green'
            ]
        };

        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(15,151,199,0.2)',
                    borderColor: 'rgba(15,151,199,1)',
                    pointBackgroundColor: 'rgba(15,151,199,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(15,151,199,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(185,68,214,0.2)',
                    borderColor: 'rgba(185,68,214,1)',
                    pointBackgroundColor: 'rgba(185,68,214,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(185,68,214,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    }
}
