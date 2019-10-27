import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'AdministratorTokenKey';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken = new BehaviorSubject('');
  constructor(private router: Router) {
    this.setToken();
  }

  login(token) {
    localStorage.setItem(TOKEN_KEY, token);
    this.setToken();
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.authToken.next(localStorage.getItem(TOKEN_KEY));
    this.router.navigate(['/']);
  }

  setToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    this.authToken.next(token);
  }

  loggedIn() {
    return (this.authToken.value) ? true : false;
  }

  headers() {
    return new HttpHeaders().set('PsyAuth', this.authToken.value);
  }

  getToken() {
    const token = JSON.parse(localStorage.getItem(TOKEN_KEY));
    console.log(token);
    return token;
  }

}
