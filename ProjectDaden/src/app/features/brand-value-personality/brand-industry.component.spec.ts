import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIndustryComponent } from './brand-industry.component';

describe('BrandValuePersonalityComponent', () => {
  let component: BrandIndustryComponent;
  let fixture: ComponentFixture<BrandIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
