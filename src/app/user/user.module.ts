import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './children/create/create.component';
import { ViewComponent } from './children/view/view.component';
import { ListComponent } from './children/list/list.component';
import { EditComponent } from './children/edit/edit.component';
import { BlockedListComponent } from './children/blocked-list/blocked-list.component';
import { ModalModule} from 'ngx-bootstrap/modal';
import { ResetPasswordComponent } from './children/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UserRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ResetPasswordComponent
  ],
  declarations: [
    UserPage,
    CreateComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    BlockedListComponent,
    ResetPasswordComponent
  ]
})
export class UserPageModule {}
