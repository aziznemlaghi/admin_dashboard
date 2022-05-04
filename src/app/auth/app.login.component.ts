import {Component, ViewChild} from '@angular/core';
import {AppComponent} from '../app.component';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent {
    @ViewChild('form') form: NgForm;

    constructor(public app: AppComponent, private authService: AuthService,
                private router: Router){
    }

    onSubmit() {
        const { email, password } = this.form.value;

        return this.authService.login(email, password).subscribe(() => {
            this.router.navigateByUrl('');

            });
        }
}
