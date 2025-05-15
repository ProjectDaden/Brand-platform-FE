import { TestBed } from '@angular/core/testing';

import { AsidePreviewService } from './aside-preview.service';

describe('AsidePreviewService', () => {
  let service: AsidePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsidePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
