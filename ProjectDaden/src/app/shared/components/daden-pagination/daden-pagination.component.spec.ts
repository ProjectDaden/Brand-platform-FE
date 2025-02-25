import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadenPaginationComponent } from './daden-pagination.component';

describe('DadenPaginationComponent', () => {
  let component: DadenPaginationComponent;
  let fixture: ComponentFixture<DadenPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadenPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadenPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
