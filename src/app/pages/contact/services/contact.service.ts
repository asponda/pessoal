import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';

import { Contact } from '../model/contact';

import { ApiCommunicationService, ApiCommunicationRequest } from '../../../shared/services/api-communication/api-communication.service';

@Injectable()
export class ContactService {

  constructor(private communication: ApiCommunicationService) { }

  send(contact: Contact): Observable<any> {
    return this.communication.post(
      {
        apiUrl: '/email/send',
        body: {
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          message: contact.message
        }
      }
    ).map((data) => {
      return data;
    });
  }

}
