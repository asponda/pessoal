import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';


// Services
import { MockHttpClient } from './http/mock-http.service';
import { environment } from '../environments/environment';
import { WebpackTranslateLoader } from './i18n/webpack-translate-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    SharedModule,
    MenuModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: (httpHandler: HttpHandler) => {
        if (environment.mock) {
          return new MockHttpClient(httpHandler);
        } else {
          return new HttpClient(httpHandler);
        }
      },

      deps: [HttpHandler]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
