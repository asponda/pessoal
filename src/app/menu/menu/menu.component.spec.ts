import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TestModule } from '../../test/test.module';

import { MenuComponent } from './menu.component';
import { MenuService } from '../services/menu/menu.service';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TestModule
      ],
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    component.menuItens = [
      {
        text: 'Test1',
        translateId: 'Test1',
        active: false,
        routerLink: ['/Test1']
      },
      {
        text: 'Test2',
        translateId: 'Test2',
        active: true,
        routerLink: ['/Test2']
      },
      {
        text: 'Test3',
        translateId: 'Test3',
        active: false,
        routerLink: ['/Test3']
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two menu itens in li tag', async(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('ul li').length).toEqual(3);
  }));

  it('should render first menu element with text "test1"', async(() => {
    // In css is set lowercase
    expect(fixture.debugElement.nativeElement.querySelector('ul li').innerText).toEqual('Test1'.toLowerCase());
  }));

  it('should render first menu element with an "a" element', async(() => {
    expect(fixture.debugElement.nativeElement.querySelector('ul li a')).not.toBe(null);
  }));

  it('should have an "a" element in first menu element with attribute href equals routerLink data', async(() => {
    expect(fixture.debugElement.nativeElement.querySelector('ul li a').getAttribute('href')).toEqual('/Test1');
  }));

  it('should have a css class "menu-item--active" in second menu element' , async(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('ul li')[1].className.split(' ')).toContain('menu-item--active');
  }));

});
