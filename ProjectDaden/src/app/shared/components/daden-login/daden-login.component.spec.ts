import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenLoginComponent } from './daden-login.component';

describe('DadenLoginComponent', () => {
  let component: DadenLoginComponent;
  let fixture: ComponentFixture<DadenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
