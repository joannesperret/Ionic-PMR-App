import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomUserListPage } from './random-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: RandomUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomUserListPageRoutingModule {}
