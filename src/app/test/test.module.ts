import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import '../../rxjs-imports';
import { WebpackTranslateLoader } from '../i18n/webpack-translate-loader';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  declarations: []
})
export class TestModule { }
