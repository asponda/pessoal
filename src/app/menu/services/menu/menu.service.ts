import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItens() {
    return [
      { text: 'About', routerLink: ['/about'], active: false },
      { text: 'Skills', routerLink: ['/skills'], active: false },
      { text: 'Contact', routerLink: ['/contact'], active: false }
    ];
  }

}
