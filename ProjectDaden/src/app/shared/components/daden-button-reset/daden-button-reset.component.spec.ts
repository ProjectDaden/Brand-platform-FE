import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenButtonResetComponent } from './daden-button-reset.component';

describe('DadenButtonResetComponent', () => {
  let component: DadenButtonResetComponent;
  let fixture: ComponentFixture<DadenButtonResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenButtonResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenButtonResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
