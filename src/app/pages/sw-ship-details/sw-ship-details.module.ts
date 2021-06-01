import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwShipDetailsPageRoutingModule } from './sw-ship-details-routing.module';

import { SwShipDetailsPage } from './sw-ship-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwShipDetailsPageRoutingModule
  ],
  declarations: [SwShipDetailsPage]
})
export class SwShipDetailsPageModule {}
