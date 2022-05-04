import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './auth/app.login.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppInvoiceComponent} from './pages/app.invoice.component';
import {AppHelpComponent} from './pages/app.help.component';
import {ServiceComponent} from './service/service.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {AddServiceComponent} from './service/add-service.component';
import {UpdateServiceComponent} from './service/update-service.component';
import {UsersComponent} from './users/users.component';
import {ReservationsComponent} from "./reservations/reservations.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent , canLoad : [AuthGuard]},
                    {path: 'pages/crud', component: AppCrudComponent, canLoad : [AuthGuard]},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'pages/service', component: ServiceComponent},
                    {path : 'pages/service/add' , component : AddServiceComponent},
                    {path: 'pages/service/update/:id' , component : UpdateServiceComponent},
                    {path : 'pages/users', component : UsersComponent},
                    {path : 'pages/reservations' , component : ReservationsComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: ''},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
