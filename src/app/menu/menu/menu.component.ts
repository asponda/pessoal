import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuItens: Array<MenuItem>;
  @Input() theme = 'black';

  constructor() { }

  ngOnInit() {
  }

}
