import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwPlanetPage } from './sw-planet.page';

const routes: Routes = [
  {
    path: '',
    component: SwPlanetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwPlanetPageRoutingModule {}
