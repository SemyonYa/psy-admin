import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.form = User.createForm();
  }

  submit() {
    if (this.form.valid) {
      this.dataService.newUser(this.form.value)
        .subscribe(
          answer => {
            if (answer != false) {
              this.dataService.getUsers();
              this.router.navigate(['/user/list']);
            }
          }
          );
    }
  }

}
