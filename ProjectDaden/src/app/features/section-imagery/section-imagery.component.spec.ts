import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImageryComponent } from './section-imagery.component';

describe('SectionImageryComponent', () => {
  let component: SectionImageryComponent;
  let fixture: ComponentFixture<SectionImageryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionImageryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionImageryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
