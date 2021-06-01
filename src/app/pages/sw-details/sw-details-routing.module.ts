import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwDetailsPage } from './sw-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwDetailsPageRoutingModule {}
