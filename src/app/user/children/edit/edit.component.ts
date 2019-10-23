import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form: FormGroup;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getUser(id)
      .subscribe(
        (u: User) => {
          this.form = u.editForm();
        }
      );
  }

  submitForm() {
    this.dataService.editUser(this.form.value)
      .subscribe(
        answer => {
          if (answer != false) {
            this.router.navigate(['/user/list']);
          }
        }
      );
  }
}
