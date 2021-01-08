import {Component, ViewChild, ElementRef} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    /* tslint:disable:component-selector */
    selector: 'app-search',
    /* tslint:enable:component-selector */
    template: `
        <div class="layout-search" [ngClass]="{'layout-search-active': app.search}">
            <div class="search-container" [@children-search]="app.search ? 'visible' : 'hidden'">
                <i class="pi pi-search"></i>
                <input #input type="text" class="p-inputtext search-input" placeholder="Search" (click)="app.searchClick = true;" (keydown)="onInputKeydown($event)"/>
            </div>
        </div>
    `,
    animations: [
        trigger('children-search', [
            transition('visible => hidden', [
                animate('.4s', keyframes([
                    style({ opacity: 1}),
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                ]))
            ]
            ),
            transition('visible => void', [
                animate('.4s', keyframes([
                    style({ opacity: 1}),
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                ]))
            ]
            ),
            transition('hidden => visible', [
                animate('.4s', keyframes([
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    style({ opacity: 1, transform: 'none' })
                ]))
                ]
            ),
        ])
    ]
})
export class AppSearchComponent{
    @ViewChild('input') inputElement: ElementRef;

    constructor(public app: AppMainComponent) {}

    onInputKeydown(event) {
        const key = event.which;

        // escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            this.app.onSearchHide(event);
        }
    }
}
