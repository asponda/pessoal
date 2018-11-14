import { Component, OnInit } from '@angular/core';

import { Skill } from '../model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillList: Array<Skill> = [
    <Skill>{ name: 'Angular', quantity: 10  },
    <Skill>{ name: 'HTML5', quantity: 10  },
    <Skill>{ name: 'CSS3', quantity: 8  },
    <Skill>{ name: 'C#', quantity: 10  },
    <Skill>{ name: '.NET', quantity: 9  },
    <Skill>{ name: 'NodeJS', quantity: 7  },
    <Skill>{ name: 'GIT', quantity: 7  },
  ];

  constructor() { }

  ngOnInit() {

  }

}
