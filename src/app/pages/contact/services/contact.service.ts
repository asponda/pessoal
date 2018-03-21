import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';

import { Contact } from '../model/contact';


@Injectable()
export class ContactService {

  constructor() { }

  send(contact: Contact): Observable<any> {
    return new Observable();
  }

}
