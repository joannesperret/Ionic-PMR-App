import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomUserListPageRoutingModule } from './random-user-list-routing.module';

import { RandomUserListPage } from './random-user-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomUserListPageRoutingModule
  ],
  declarations: [RandomUserListPage]
})
export class RandomUserListPageModule {}
