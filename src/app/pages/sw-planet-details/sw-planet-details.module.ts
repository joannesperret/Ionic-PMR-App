import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwPlanetDetailsPageRoutingModule } from './sw-planet-details-routing.module';

import { SwPlanetDetailsPage } from './sw-planet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwPlanetDetailsPageRoutingModule
  ],
  declarations: [SwPlanetDetailsPage]
})
export class SwPlanetDetailsPageModule {}
