import { Component, OnInit } from '@angular/core';

import { SkillsService } from '../services/skills.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillList: Array<Skill>;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills().subscribe((data) => {
      this.skillList = data;
    });
  }

}
