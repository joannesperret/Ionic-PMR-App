import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwPlanetDetailsPage } from './sw-planet-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwPlanetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwPlanetDetailsPageRoutingModule {}
