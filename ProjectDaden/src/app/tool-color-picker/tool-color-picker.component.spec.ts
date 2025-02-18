import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolColorPickerComponent } from './tool-color-picker.component';

describe('ToolColorPickerComponent', () => {
  let component: ToolColorPickerComponent;
  let fixture: ComponentFixture<ToolColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolColorPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
