import { TestBed, inject } from '@angular/core/testing';

import { ApiCommunicationService } from './api-communication.service';

describe('ApiCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCommunicationService]
    });
  });

  it('should be created', inject([ApiCommunicationService], (service: ApiCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
