import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import '../../rxjs-imports';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateCustomLoader } from './translate-custom-loader';
import { WebpackTranslateLoader } from '../i18n/webpack-translate-loader';

import { MockHttpClient } from '../http/mock-http.service';

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
  providers: [
    {
      provide: HttpClient,
      useFactory: (httpHandler: HttpHandler) => {
        return new MockHttpClient(httpHandler);
      },

      deps: [HttpHandler]
    }
  ],
  declarations: []
})
export class TestModule { }
