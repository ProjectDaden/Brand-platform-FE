import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandValuePersonalityComponent } from './brand-value-personality.component';

describe('BrandValuePersonalityComponent', () => {
  let component: BrandValuePersonalityComponent;
  let fixture: ComponentFixture<BrandValuePersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandValuePersonalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandValuePersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
