import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';


// Services
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
  bootstrap: [AppComponent]
})
export class AppModule { }
