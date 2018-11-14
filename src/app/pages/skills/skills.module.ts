import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  declarations: [SkillItemComponent, SkillsComponent],
  providers: []
})
export class SkillsModule { }
