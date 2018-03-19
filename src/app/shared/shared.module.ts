import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LogoComponent],
  exports: [LogoComponent],
  providers: []
})
export class SharedModule { }
