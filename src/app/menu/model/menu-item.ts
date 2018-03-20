import { RouterLink } from '@angular/router';

export interface MenuItem {
  text: string;
  translateId: string;
  routerLink: Array<string>;
  active: boolean;
}
