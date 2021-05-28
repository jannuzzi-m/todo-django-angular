import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router"

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
  username: string = '';
  password: string = '';
  login() {
    if (!this.username) { return }
    this.userService.requestUserToken(this.username, this.password).subscribe(res => {
      if(!res?.token){ return }
      this.userService.setUserToken(res.token);
      
      console.log(res)
      this.router.navigate(['/dashboard']);
    }
    )
  }

}

