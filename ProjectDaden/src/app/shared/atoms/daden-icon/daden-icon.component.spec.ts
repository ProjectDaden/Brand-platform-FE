import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenIconComponent } from './daden-icon.component';

describe('DadenIconComponent', () => {
  let component: DadenIconComponent;
  let fixture: ComponentFixture<DadenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
