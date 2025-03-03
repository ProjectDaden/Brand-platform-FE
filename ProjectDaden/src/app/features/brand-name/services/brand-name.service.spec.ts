import { TestBed } from '@angular/core/testing';

import { BrandNameService } from './brand-name.service';

describe('BrandNameService', () => {
  let service: BrandNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
