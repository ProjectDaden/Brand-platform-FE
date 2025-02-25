import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenSliderComponent } from './daden-slider.component';

describe('DadenSliderComponent', () => {
  let component: DadenSliderComponent;
  let fixture: ComponentFixture<DadenSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
