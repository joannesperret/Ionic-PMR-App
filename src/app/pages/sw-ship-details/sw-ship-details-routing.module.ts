import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwShipDetailsPage } from './sw-ship-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwShipDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwShipDetailsPageRoutingModule {}
