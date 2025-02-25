import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTypographyComponent } from './section-typography.component';

describe('SectionTypographyComponent', () => {
  let component: SectionTypographyComponent;
  let fixture: ComponentFixture<SectionTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTypographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
