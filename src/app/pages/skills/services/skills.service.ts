import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Skill } from '../model/skill';
import { getSkillsMock } from './mock/getSkills.mock';

@Injectable()
export class SkillsService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    const sub =  new Subject<Skill[]>();

    setTimeout(() => {
      sub.next(getSkillsMock);
    }, 500);

    return sub;
  }

}
