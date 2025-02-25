import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCopywrightComponent } from './section-copywright.component';

describe('SectionCopywrightComponent', () => {
  let component: SectionCopywrightComponent;
  let fixture: ComponentFixture<SectionCopywrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCopywrightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCopywrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
