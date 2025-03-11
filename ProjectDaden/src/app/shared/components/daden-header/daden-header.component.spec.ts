import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenHeaderComponent } from './daden-header.component';

describe('DadenHeaderComponent', () => {
  let component: DadenHeaderComponent;
  let fixture: ComponentFixture<DadenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
