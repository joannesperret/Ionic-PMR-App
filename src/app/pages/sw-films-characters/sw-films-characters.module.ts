import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwFilmsCharactersPageRoutingModule } from './sw-films-characters-routing.module';

import { SwFilmsCharactersPage } from './sw-films-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwFilmsCharactersPageRoutingModule
  ],
  declarations: [SwFilmsCharactersPage]
})
export class SwFilmsCharactersPageModule {}
