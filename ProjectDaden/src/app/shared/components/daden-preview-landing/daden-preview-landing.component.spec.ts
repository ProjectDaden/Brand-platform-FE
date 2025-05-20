import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenPreviewLandingComponent } from './daden-preview-landing.component';

describe('DadenPreviewLandingComponent', () => {
  let component: DadenPreviewLandingComponent;
  let fixture: ComponentFixture<DadenPreviewLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenPreviewLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenPreviewLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
