import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() size: 'small' | 'normal' = 'small';

  @HostBinding('class.normal') get normal() {
    return this.size === 'normal';
  }

  constructor() { }

  ngOnInit() {
  }

}
