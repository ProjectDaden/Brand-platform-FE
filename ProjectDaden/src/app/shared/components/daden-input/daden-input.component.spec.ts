import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenInputComponent } from './daden-input.component';

describe('DadenInputComponent', () => {
  let component: DadenInputComponent;
  let fixture: ComponentFixture<DadenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
