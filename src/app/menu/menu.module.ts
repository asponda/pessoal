import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuService } from './services/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { I18nModule } from '../i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    SharedModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  providers: [MenuService]
})
export class MenuModule { }
