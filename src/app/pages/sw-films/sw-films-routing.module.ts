import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwFilmsPage } from './sw-films.page';

const routes: Routes = [
  {
    path: '',
    component: SwFilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwFilmsPageRoutingModule {}
