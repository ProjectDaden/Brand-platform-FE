import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenInputColorspectrumComponent } from './daden-input-colorspectrum.component';

describe('DadenInputColorspectrumComponent', () => {
  let component: DadenInputColorspectrumComponent;
  let fixture: ComponentFixture<DadenInputColorspectrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenInputColorspectrumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenInputColorspectrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
