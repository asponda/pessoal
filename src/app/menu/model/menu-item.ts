import { RouterLink } from '@angular/router';

export interface MenuItem {
  text: string;
  routerLink: Array<string>;
  active: boolean;
}
