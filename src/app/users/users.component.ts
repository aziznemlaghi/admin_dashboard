import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../app.main.component';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private router: Router, private userService: UsersService, public app: AppComponent, public appMain: AppMainComponent) {

  }
  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe( data => {
          this.users = data;
          console.log(this.users);
        });
  }

}
