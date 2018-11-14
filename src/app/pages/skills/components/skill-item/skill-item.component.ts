import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() max = 10;
  @Input() quantity = 0;
  @Input() name = '';

  get getItensToFill() {
    return new Array(this.max).fill(this.max > 0 ? this.max - 1 : this.max);
  }

  constructor() { }

  ngOnInit() {
  }

}
