import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  title: string;
  userId: number;
  result: { text: string, class: string};
  constructor(private dataService: DataService, private modalController: ModalController) { }

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(this.userId),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  sendNewPassword() {
    // console.log(this.form.value);
    this.dataService.resetPassword(this.form.value)
      .subscribe(
        (data) => {
          console.log('data', data);
          if (data === true) {
            this.result = {
              class: 'alert-success',
              text: 'Успешно изменен'
            };
            setTimeout(() => this.modalController.dismiss(), 3000);
          } else {
            this.result = {
              class: 'alert-danger',
              text: 'Попытка неудачна'
            };
          }
        }
      );
  }

  close() {
    this.modalController.dismiss();
  }

}
