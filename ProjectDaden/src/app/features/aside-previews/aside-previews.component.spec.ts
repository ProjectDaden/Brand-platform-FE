import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePreviewsComponent } from './aside-previews.component';

describe('AsidePreviewsComponent', () => {
  let component: AsidePreviewsComponent;
  let fixture: ComponentFixture<AsidePreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsidePreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsidePreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
