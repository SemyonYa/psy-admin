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
            return new User(u.id, u.organization_name, u.specialists_quantity, u.parent_user_id, u.login, u.blocked);
          });
        }
      ));
  }
}
