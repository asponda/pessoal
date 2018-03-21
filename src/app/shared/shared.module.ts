import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent, InputErrorComponent],
  exports: [LogoComponent, InputErrorComponent],
  providers: []
})
export class SharedModule { }
