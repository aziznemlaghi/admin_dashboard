import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from '../app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Favorites', icon: 'pi pi-home',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {separator: true},
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'services', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/service']},
                    {label: 'users', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/users']},
                    {label: 'Reservations', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/reservations']},


                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Log out', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']},
                ]
            },
            {separator: true},
        ];
    }
}
