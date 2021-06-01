import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwShipPageRoutingModule } from './sw-ship-routing.module';

import { SwShipPage } from './sw-ship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwShipPageRoutingModule
  ],
  declarations: [SwShipPage]
})
export class SwShipPageModule {}
