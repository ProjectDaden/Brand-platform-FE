import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenDropdownComponent } from './daden-dropdown.component';

describe('DadenDropdownComponent', () => {
  let component: DadenDropdownComponent;
  let fixture: ComponentFixture<DadenDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
