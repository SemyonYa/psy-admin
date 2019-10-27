import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, concatAll, switchAll, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { throwError, of, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  users = new BehaviorSubject<User[]>([]);
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  get(url): Observable<any> {
    return this.http.get(url, { headers: this.authService.headers() })
      .pipe(
        catchError(
          err => {
            if (err.status === 401) {
              this.authService.logout();
              this.router.navigateByUrl('/login');
              return of(false);
            }
          }
        ),
      );
  }

  post(url, formData): Observable<any> {
    console.log('post', formData);
    return this.http.post(url, formData, { headers: this.authService.headers() })
      .pipe(
        catchError(
          err => {
            if (err.status === 401) {
              this.authService.logout();
              this.router.navigateByUrl('/login');
              return of(false);
            }
          }
        ),
      );
  }

  // AUTH

  login(formData) {
    return this.http.post(environment.host + '/auth/login', formData);
  }

  // USERS

  getUsers() {
    this.get(environment.host + '/user/all')
      .pipe(map(
        data => {
          if (data) {
            const users = data as any[];
            return users.map(u => {
              // tslint:disable-next-line:max-line-length
              return new User(u.id, u.organization_name, u.email, u.phone, u.specialists_quantity, u.parent_user_id, u.login, u.blocked, u.role);
            });
          }
        }
      ))
      .subscribe(
        (data: User[]) => {
          this.users.next(data);
        }
      );
  }

  getBlockedUsers() {
    return this.get(environment.host + '/user/all-blocked')
      .pipe(map(
        data => {
          const users = data as any[];
          return users.map(u => {
            // tslint:disable-next-line:max-line-length
            return new User(u.id, u.organization_name, u.email, u.phone, u.specialists_quantity, u.parent_user_id, u.login, u.blocked, u.role);
          });
        }
      ));
  }

  getUser(id) {
    return this.get(environment.host + '/user/one?id=' + id)
      .pipe(map(
        (u: any) => {
          // tslint:disable-next-line:max-line-length
          return new User(u.id, u.organization_name, u.email, u.phone, u.specialists_quantity, u.parent_user_id, u.login, u.blocked, u.role);
        }
      ));
  }

  getUserChildren(id) {
    return this.get(environment.host + '/user/children?id=' + id)
      .pipe(map(
        data => {
          const users = data as any[];
          return users.map(u => {
            // tslint:disable-next-line:max-line-length
            return new User(u.id, u.organization_name, u.email, u.phone, u.specialists_quantity, u.parent_user_id, u.login, u.blocked, u.role);
          });
        }
      ));
  }

  newUser(formData) {
    return this.post(environment.host + '/user/create', formData);
  }

  editUser(formData) {
    return this.post(environment.host + '/user/update', formData);
  }

  unlockUser(id) {
    return this.post(environment.host + '/user/unlock', { id });
  }

  resetPassword(formData) {
    // console.log(formData);
    return this.post(environment.host + '/user/reset-password', formData);
  }

}
