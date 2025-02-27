import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenMultiListSelectionComponent } from './daden-multi-list-selection.component';

describe('DadenMultiListSelectionComponent', () => {
  let component: DadenMultiListSelectionComponent;
  let fixture: ComponentFixture<DadenMultiListSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenMultiListSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenMultiListSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
