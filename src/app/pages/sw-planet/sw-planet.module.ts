import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwPlanetPageRoutingModule } from './sw-planet-routing.module';

import { SwPlanetPage } from './sw-planet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwPlanetPageRoutingModule
  ],
  declarations: [SwPlanetPage]
})
export class SwPlanetPageModule {}
