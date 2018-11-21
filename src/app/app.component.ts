// Angular
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { Title } from '@angular/platform-browser';

// Translate
import { TranslateService } from '@ngx-translate/core';

// Components
import { MenuItem } from './menu/model/menu-item';
import { MenuService } from './menu/services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItens: Array<MenuItem>;
  menuTheme = 'white';

  isCover = false;

  get language() {
    return this.translateService.currentLang;
  }

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private titleService: Title,
    private translateService: TranslateService,
    private menuService: MenuService
  ) {
    translateService.addLangs(['en', 'pt']);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isCover = event.url === '/' || event.url === '/home';

        this.setTheme(event.url);
        this.setActiveMenu(event.url);
      }
    });

    this.menuItens = this.menuService.getMenuItens();
  }

  private setTheme(url) {
    this.menuTheme = 'white';
  }

  private setActiveMenu(route) {

    const routeCompare = route === '/' ? this.menuItens.find(m => m.routerLink.includes('/home')).routerLink[0] : route;

    this.menuItens.forEach(menuItem => {
      menuItem.active = menuItem.routerLink.includes(routeCompare);

      if (menuItem.active) {
        // Set page title with translated text
        this.translateService.get(menuItem.translateId).subscribe((result) => {
          this.setPageTitle(result);
        });
      }

    });
  }

  private setPageTitle(text?: string) {
    this.titleService.setTitle(`Airton Sponda${text ? ' | ' + text : ''}`);
  }

  switchLanguage(language: string) {
    this.translateService.use(language);

    // Find active menu
    const activeMenu = this.menuItens ? this.menuItens.find(m => m.active) : null;

    if (activeMenu) {
      // Set page title with translated text
      this.translateService.get(activeMenu.translateId).subscribe((result) => {
        this.setPageTitle(result);
      });
    } else {
      this.setPageTitle();
    }

  }

}
