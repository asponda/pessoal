import { TestBed, inject } from '@angular/core/testing';

import { SkillsService } from './skills.service';
import { TestModule } from '../../../test/test.module';
import { SharedModule } from '../../../shared/shared.module';

describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule, SharedModule],
      providers: [SkillsService]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
