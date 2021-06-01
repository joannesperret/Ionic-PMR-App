import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwShipPage } from './sw-ship.page';

const routes: Routes = [
  {
    path: '',
    component: SwShipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwShipPageRoutingModule {}
