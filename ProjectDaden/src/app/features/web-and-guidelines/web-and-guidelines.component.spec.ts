import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAndGuidelinesComponent } from './web-and-guidelines.component';

describe('WebAndGuidelinesComponent', () => {
  let component: WebAndGuidelinesComponent;
  let fixture: ComponentFixture<WebAndGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAndGuidelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAndGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
