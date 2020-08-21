import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: AppMainComponent,
                children: [
                    { path: '', component: DashboardDemoComponent },
                    { path: 'uikit/panels', component: PanelsDemoComponent },
                    { path: 'uikit/overlays', component: OverlaysDemoComponent },
                    { path: 'uikit/menus', component: MenusDemoComponent },
                    { path: 'uikit/messages', component: MessagesDemoComponent },
                    { path: 'uikit/misc', component: MiscDemoComponent },
                    { path: 'pages/empty', component: EmptyDemoComponent },
                    { path: 'uikit/charts', component: ChartsDemoComponent },
                    { path: 'uikit/file', component: FileDemoComponent },
                    { path: 'documentation', component: DocumentationComponent }
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: '404', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
