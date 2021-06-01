import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwPersonnagesPage } from './sw-personnages.page';

const routes: Routes = [
  {
    path: '',
    component: SwPersonnagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwPersonnagesPageRoutingModule {}
