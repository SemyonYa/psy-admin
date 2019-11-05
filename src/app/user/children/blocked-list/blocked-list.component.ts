import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-blocked-list',
  templateUrl: './blocked-list.component.html',
  styleUrls: ['./blocked-list.component.scss'],
})
export class BlockedListComponent implements OnInit {
  users: User[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getBlockedUsers()
      .subscribe(
        (data: User[]) => {
          this.users = data;
        }
      );
  }

  unlock(id) {
    this.dataService.unlockUser(id)
    .subscribe(
      (answer) => {
        if (answer != false) {
          this.dataService.getUsers();
          this.router.navigate(['/user']);
        }
      }
    );
  }

}
