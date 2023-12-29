import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise2PageRoutingModule } from './exercise2-routing.module';

import { Exercise2Page } from './exercise2.page';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise2PageRoutingModule
  ],
  declarations: [Exercise2Page, NavBarComponent]
})
export class Exercise2PageModule {}
