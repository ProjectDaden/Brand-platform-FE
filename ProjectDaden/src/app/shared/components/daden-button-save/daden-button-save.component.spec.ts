import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenButtonSaveComponent } from './daden-button-save.component';

describe('DadenButtonSaveComponent', () => {
  let component: DadenButtonSaveComponent;
  let fixture: ComponentFixture<DadenButtonSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenButtonSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenButtonSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
