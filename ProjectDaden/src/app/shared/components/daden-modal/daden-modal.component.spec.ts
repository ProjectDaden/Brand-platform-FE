import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenModalComponent } from './daden-modal.component';

describe('DadenModalComponent', () => {
  let component: DadenModalComponent;
  let fixture: ComponentFixture<DadenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
