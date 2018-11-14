import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../model/contact';

import { ApiCommunicationService, ApiCommunicationRequest } from '../../../shared/services/api-communication/api-communication.service';


@Injectable()
export class ContactService {

  constructor(private communication: ApiCommunicationService) { }

  send(contact: Contact): Observable<any> {
    return this.communication.post(
      {
        apiUrl: '/mails/send',
        body: {
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          message: contact.message
        }
      }
    ).pipe(
      map((data) => {
      return data;
    }));
  }

}
