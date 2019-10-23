import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  user: User;
  children: User[] = [];
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getUser(id)
      .subscribe(
        (u: User) => {
          this.user = u;
        }
      );
    this.dataService.getUserChildren(id)
      .subscribe(
        (data: User[]) => {
          this.children = data;
        }
      );
  }

}
