import { TestBed } from '@angular/core/testing';

import { BrandColorThemeService } from './brand-color-theme.service';

describe('BrandColorThemeService', () => {
  let service: BrandColorThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandColorThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
