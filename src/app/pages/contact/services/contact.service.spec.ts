import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { TestModule } from '../../../test/test.module';
import { SharedModule } from '../../../shared/shared.module';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, SharedModule],
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
