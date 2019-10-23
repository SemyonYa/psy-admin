import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.host + '/user/all')
      .pipe(map(
        data => {
          const users = data as any[];
          return users.map(u => {
            return new User(u.id, u.organization_name, u.email, u.specialists_quantity, u.parent_user_id, u.login, u.blocked);
          });
        }
      ));
  }

  getBlockedUsers() {
    return this.http.get(environment.host + '/user/all-blocked')
      .pipe(map(
        data => {
          const users = data as any[];
          return users.map(u => {
            return new User(u.id, u.organization_name, u.email, u.specialists_quantity, u.parent_user_id, u.login, u.blocked);
          });
        }
      ));
  }

  getUser(id) {
    return this.http.get(environment.host + '/user/one?id=' + id)
      .pipe(map(
        (u: any) => {
          return new User(u.id, u.organization_name, u.email, u.specialists_quantity, u.parent_user_id, u.login, u.blocked);
        }
      ));
  }

  getUserChildren(id) {
    return this.http.get(environment.host + '/user/children?id=' + id)
      .pipe(map(
        data => {
          const users = data as any[];
          return users.map(u => {
            return new User(u.id, u.organization_name, u.email, u.specialists_quantity, u.parent_user_id, u.login, u.blocked);
          });
        }
      ));
  }

  newUser(formData) {
    return this.http.post(environment.host + '/user/create', formData);
  }

  editUser(formData) {
    return this.http.post(environment.host + '/user/update', formData);
  }

  unlockUser(id) {
    return this.http.post(environment.host + '/user/unlock', { id });
  }

}
