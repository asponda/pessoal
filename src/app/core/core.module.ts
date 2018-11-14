import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCommunicationService } from './services/api-communication/api-communication.service';
import { FormsService } from './services/forms/forms.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiCommunicationService, FormsService]
})
export class CoreModule { }
