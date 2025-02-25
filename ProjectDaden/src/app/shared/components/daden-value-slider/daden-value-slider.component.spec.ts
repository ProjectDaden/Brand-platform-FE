import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenValueSliderComponent } from './daden-value-slider.component';

describe('DadenValueSliderComponent', () => {
  let component: DadenValueSliderComponent;
  let fixture: ComponentFixture<DadenValueSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenValueSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenValueSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
