import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserPage } from './user.page';
import { CreateComponent } from './children/create/create.component';
import { ViewComponent } from './children/view/view.component';
import { ListComponent } from './children/list/list.component';
import { EditComponent } from './children/edit/edit.component';
import { BlockedListComponent } from './children/blocked-list/blocked-list.component';

const userRoutes: Routes = [
  {
    path: 'user', component: UserPage,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'blocked-list', component: BlockedListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'view/:id', component: ViewComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
