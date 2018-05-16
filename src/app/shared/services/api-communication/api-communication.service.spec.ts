import { TestBed, inject } from '@angular/core/testing';

import { ApiCommunicationService } from './api-communication.service';
import { TestModule } from '../../../test/test.module';

describe('ApiCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      providers: [ApiCommunicationService]
    });
  });

  it('should be created', inject([ApiCommunicationService], (service: ApiCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
