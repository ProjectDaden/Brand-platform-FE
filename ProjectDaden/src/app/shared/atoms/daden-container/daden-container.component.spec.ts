import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenContainerComponent } from './daden-container.component';

describe('DadenContainerComponent', () => {
  let component: DadenContainerComponent;
  let fixture: ComponentFixture<DadenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
