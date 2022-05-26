import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountLogin, Token, AccountLogup } from '../interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://musagy-notas-personales.herokuapp.com/login/';

  constructor(private http: HttpClient) {}

  userLogin(user: AccountLogin) {
    return this.http.post<Token>(this.API_URL + 'signin', user);
  }
  userLogup(user: AccountLogup) {
    // const { password, confirmPassword } = user;
    // if (password !== confirmPassword)
    //   return console.error('las contraseñas no coinciden');
    
      return this.http.post<Token>(this.API_URL + 'signup', user);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
