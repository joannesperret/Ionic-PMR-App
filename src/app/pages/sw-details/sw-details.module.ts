import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwDetailsPageRoutingModule } from './sw-details-routing.module';

import { SwDetailsPage } from './sw-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwDetailsPageRoutingModule
  ],
  declarations: [SwDetailsPage]
})
export class SwDetailsPageModule {}
