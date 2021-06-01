import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwFilmsPageRoutingModule } from './sw-films-routing.module';

import { SwFilmsPage } from './sw-films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwFilmsPageRoutingModule
  ],
  declarations: [SwFilmsPage]
})
export class SwFilmsPageModule {}
