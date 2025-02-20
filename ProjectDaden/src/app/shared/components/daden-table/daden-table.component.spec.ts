import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenTableComponent } from './daden-table.component';

describe('DadenTableComponent', () => {
  let component: DadenTableComponent;
  let fixture: ComponentFixture<DadenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
