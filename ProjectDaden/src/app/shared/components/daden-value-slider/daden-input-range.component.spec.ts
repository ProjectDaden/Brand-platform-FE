import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenInputRangeComponent } from './daden-input-range.component';

describe('DadenInputRangeComponent', () => {
  let component: DadenInputRangeComponent;
  let fixture: ComponentFixture<DadenInputRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenInputRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenInputRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
