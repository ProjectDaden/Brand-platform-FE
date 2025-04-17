import { TestBed } from '@angular/core/testing';

import { ArchetypeSetupService } from './archetype-setup.service';

describe('ArchetypeSetupService', () => {
  let service: ArchetypeSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchetypeSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
