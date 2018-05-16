import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ApiCommunicationService } from './services/api-communication/api-communication.service';
import { FormsService } from './services/forms/forms.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent, InputErrorComponent, AvatarComponent],
  exports: [LogoComponent, InputErrorComponent, AvatarComponent],
  providers: [ApiCommunicationService, FormsService]
})
export class SharedModule { }
