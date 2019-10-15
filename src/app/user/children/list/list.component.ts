import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  fakeUsers: string[] = [
    'IvnaovII',
    'PetrovPP',
    'NikolaevNN'
  ];
  constructor() { }

  ngOnInit() {}

  view(id) {
    alert('view ' + id);
  }

  edit(id) {
    alert('edit ' + id);
  }

}
