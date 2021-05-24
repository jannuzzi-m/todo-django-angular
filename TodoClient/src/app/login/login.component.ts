import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router"
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  user:User = {
    id: 1,
    username: '',
    password: ''
  }
  login() {
    // if(!this.user.username){return}
    this.userService.getTodos().subscribe(todos => console.log(todos))
    // this.userService.user = this.user;
    // this.router.navigate(['/dashboard']);
  }

}
