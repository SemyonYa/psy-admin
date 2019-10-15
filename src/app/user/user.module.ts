import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './children/create/create.component';
import { ViewComponent } from './children/view/view.component';
import { ListComponent } from './children/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule
  ],
  declarations: [
    UserPage,
    CreateComponent,
    ViewComponent,
    ListComponent
  ]
})
export class UserPageModule {}
