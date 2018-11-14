import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nModule } from '../../i18n/i18n.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
