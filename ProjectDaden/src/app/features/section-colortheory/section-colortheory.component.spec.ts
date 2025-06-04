import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionColortheoryComponent } from './section-colortheory.component';

describe('SectionColortheoryComponent', () => {
  let component: SectionColortheoryComponent;
  let fixture: ComponentFixture<SectionColortheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionColortheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionColortheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
