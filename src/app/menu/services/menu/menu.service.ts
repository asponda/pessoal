import { Injectable } from '@angular/core';

import { MenuItem } from '../../model/menu-item';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItens(): Array<MenuItem> {
    return [
      { text: 'Menu', translateId: 'MENU.HOME', routerLink: ['/home'], active: false },
      { text: 'About', translateId: 'MENU.ABOUT', routerLink: ['/about'], active: false },
      { text: 'Skills', translateId: 'MENU.SKILLS', routerLink: ['/skills'], active: false },
      { text: 'Contact', translateId: 'MENU.CONTACT', routerLink: ['/contact'], active: false }
    ];
  }

}
