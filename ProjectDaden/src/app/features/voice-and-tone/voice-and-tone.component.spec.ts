import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceAndToneComponent } from './voice-and-tone.component';

describe('VoiceAndToneComponent', () => {
  let component: VoiceAndToneComponent;
  let fixture: ComponentFixture<VoiceAndToneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceAndToneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceAndToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
