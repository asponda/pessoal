import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { SharedModule } from '../../shared/shared.module';
import { I18nModule } from '../../i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    I18nModule,
    ContactRoutingModule
  ],
  providers: [
    ContactService
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
