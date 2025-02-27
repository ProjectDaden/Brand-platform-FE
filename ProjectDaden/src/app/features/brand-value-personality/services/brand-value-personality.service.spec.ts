import { TestBed } from '@angular/core/testing';

import { BrandValuePersonalityService } from './brand-value-personality.service';

describe('BrandValuePersonalityService', () => {
  let service: BrandValuePersonalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandValuePersonalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
