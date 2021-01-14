import {Component, ViewChild, ElementRef} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {animate, state, style, transition, trigger, AnimationEvent} from '@angular/animations';

@Component({
    /* tslint:disable:component-selector */
    selector: 'app-search',
    /* tslint:enable:component-selector */
    template: `
        <div class="layout-search">
            <div class="search-container" [@animation]="appMain.search ? 'visible' : 'hidden'" (@animation.done)="onAnimationEnd($event)">
                <i class="pi pi-search"></i>
                <input #input type="text" class="p-inputtext search-input" placeholder="Search" (click)="appMain.searchClick = true;" (keydown)="onInputKeydown($event)"/>
            </div>
        </div>
    `,
    animations: [
        trigger('animation', [
            state('hidden', style({
                transform: 'translateY(20px)',
                opacity: 0,
                visibility: 'hidden'
            })),
            state('visible', style({
                opacity: 1,
                visibility: 'visible'
            })),
            transition('hidden <=> visible', animate('.4s cubic-bezier(.05,.74,.2,.99)'))
        ])
    ]
})
export class AppSearchComponent {

    @ViewChild('input') inputElement: ElementRef;

    constructor(public appMain: AppMainComponent) {}

    onAnimationEnd(event: AnimationEvent) {
        if (event.toState === 'visible') {
            this.inputElement.nativeElement.focus();
        }
    }

    onInputKeydown(event) {
        const key = event.which;

        // escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            this.appMain.onSearchHide(event);
        }
    }
}
