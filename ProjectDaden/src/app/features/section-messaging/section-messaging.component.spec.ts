import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMessagingComponent } from './section-messaging.component';

describe('SectionMessagingComponent', () => {
  let component: SectionMessagingComponent;
  let fixture: ComponentFixture<SectionMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMessagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
