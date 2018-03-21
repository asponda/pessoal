import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateCustomLoader } from './translate-custom-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateCustomLoader
      }
    })
  ],
  declarations: []
})
export class TestModule { }
