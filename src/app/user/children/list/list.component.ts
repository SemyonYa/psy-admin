import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
        (data: User[]) => this.users = data
      );
  }

  view(id) {
    this.router.navigate(['/user/edit/' + id]);
  }

  edit(id) {
    this.router.navigate(['/user/edit/' + id]);
  }

}
