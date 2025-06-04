import { TestBed } from '@angular/core/testing';

import { ColorTheoryService } from './color-theory.service';

describe('ColorTheoryService', () => {
  let service: ColorTheoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorTheoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
