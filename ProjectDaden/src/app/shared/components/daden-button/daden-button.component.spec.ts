import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenButtonComponent } from './daden-button.component';

describe('DadenButtonComponent', () => {
  let component: DadenButtonComponent;
  let fixture: ComponentFixture<DadenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
