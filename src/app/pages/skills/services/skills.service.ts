import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Skill } from '../model/skill';
import { ApiCommunicationService } from '../../../shared/services/api-communication/api-communication.service';

@Injectable()
export class SkillsService {

  constructor(private communication: ApiCommunicationService) { }

  getSkills(): Observable<Skill[]> {
    return this.communication.get(
      {
        apiUrl: '/skills'
      }
    ).map((data: Array<Object>) => {
      return data.map((item: any) => ({ name: item.name, quantity: item.quantity }));
    });
  }

}
