import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bsModalRef: BsModalRef;
  users: BehaviorSubject<User[]>;
  constructor(private dataService: DataService, private router: Router, private modalService: BsModalService) {
    this.users = dataService.users;
  }

  ngOnInit() {
    this.dataService.getUsers();
  }

  view(id) {
    this.router.navigate(['/user/edit/' + id]);
  }

  edit(id) {
    this.router.navigate(['/user/edit/' + id]);
  }

  openResetPasswordModal(userId, organizationName) {
    const initialState = {
      userId,
      title: 'Смена пароля: ' + organizationName
    };
    this.bsModalRef = this.modalService.show(ResetPasswordComponent, {initialState});
  }

}
