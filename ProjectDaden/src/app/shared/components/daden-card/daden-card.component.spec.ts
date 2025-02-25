import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenCardComponent } from './daden-card.component';

describe('DadenCardComponent', () => {
  let component: DadenCardComponent;
  let fixture: ComponentFixture<DadenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
