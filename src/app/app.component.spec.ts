import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';

import { TestModule } from './test/test.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { TranslateService } from '@ngx-translate/core';




describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TestModule,
        HttpClientModule,
        SharedModule,
        MenuModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

  }));

  beforeEach(inject([TranslateService], s => {}));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));



});
