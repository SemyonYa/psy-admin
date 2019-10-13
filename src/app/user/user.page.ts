import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: User[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
