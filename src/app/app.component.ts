// Angular
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

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

  constructor(
    private _router: Router,
    private _renderer: Renderer2,
    private _menuService: MenuService
  ) {}

  ngOnInit() {

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menuTheme = event.url === '/home' ? 'white' : 'black';

        // Verify if route is home to add cover theme
        if (event.url === '/home') {
          this._renderer.addClass(document.body, 'cover');
        } else {
          this._renderer.removeClass(document.body, 'cover');
        }

        this._setActiveMenu(event.url);
      }

    });

    this.menuItens = this._menuService.getMenuItens();
  }

  private _setActiveMenu(route) {
    this.menuItens.forEach(menuItem => {
        menuItem.active = menuItem.routerLink.includes(route);
    });
  }
}
