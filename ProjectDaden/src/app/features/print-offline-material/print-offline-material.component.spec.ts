import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOfflineMaterialComponent } from './print-offline-material.component';

describe('PrintOfflineMaterialComponent', () => {
  let component: PrintOfflineMaterialComponent;
  let fixture: ComponentFixture<PrintOfflineMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintOfflineMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintOfflineMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
