import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = {
    usernameOrEmail: '',
    password: '',
  };

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    this.user.userLogin(this.loginForm).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      (e) => {
        console.log(e.error);
        console.log(this.loginForm);
      }
    );
  }
}
