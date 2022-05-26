import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['../login/login.component.css', './logup.component.css'],
})
export class LogupComponent implements OnInit {
  logupForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {}
  onLogup() {
    const { name, username, email, password, confirmPassword } = this.logupForm;
    if (password !== confirmPassword)
      return console.error('las contraseñas no coinciden');
    
    if (!email.includes('@')) {
      return console.error('el email no es valido');
    }

    return this.userSvc.userLogup({ name, username, email, password }).subscribe(
      (res) => {
        console.log(res);
        console.log("Usuario creado");
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
