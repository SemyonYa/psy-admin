import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';
import { IMenuItem } from '../models/imenu-item';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menu
      .add({ link: '/user/list', title: 'Список' })
      .add({ link: '/user/create', title: 'Создать' })
      .add({ link: '/user/view', title: 'Просмотр' });
  }

}
