import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent, InputErrorComponent, AvatarComponent, FooterComponent],
  exports: [LogoComponent, InputErrorComponent, AvatarComponent, FooterComponent],
  providers: []
})
export class SharedModule { }
