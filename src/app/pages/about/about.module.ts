import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../../shared/shared.module';
import { I18nModule } from '../../i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    I18nModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
