import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenLoadingComponent } from './daden-loading.component';

describe('DadenLoadingComponent', () => {
  let component: DadenLoadingComponent;
  let fixture: ComponentFixture<DadenLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
