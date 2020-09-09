import { Component } from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    /* tslint:disable:component-selector */
    selector: 'app-search',
    /* tslint:enable:component-selector */
    template: `
        <div class="layout-search" [ngClass]="{'layout-search-active': app.search}">
            <div class="search-container fade-in-up">
                <i class="pi pi-search"></i>
                <input type="text" class="p-inputtext" placeholder="Search" (click)="app.searchClick = true;"/>
            </div>
        </div>
    `
})
export class AppSearchComponent {

    constructor(public app: AppMainComponent) {}
}
