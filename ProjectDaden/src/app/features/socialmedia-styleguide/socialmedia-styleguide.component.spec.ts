import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaStyleguideComponent } from './socialmedia-styleguide.component';

describe('SocialmediaStyleguideComponent', () => {
  let component: SocialmediaStyleguideComponent;
  let fixture: ComponentFixture<SocialmediaStyleguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialmediaStyleguideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaStyleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
