import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwPersonnagesPageRoutingModule } from './sw-personnages-routing.module';

import { SwPersonnagesPage } from './sw-personnages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwPersonnagesPageRoutingModule
  ],
  declarations: [SwPersonnagesPage]
})
export class SwPersonnagesPageModule {}
