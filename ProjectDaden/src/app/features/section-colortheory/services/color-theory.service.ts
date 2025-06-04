import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorTheoryService {

  private readonly http = inject(HttpClient);

  archetypeColorDetailsPath = "../../../../assets/tempUsage/archetype-detailed-color-information.json";
  archetypeColorInfoDropdownPath = "../../../../assets/tempUsage/archetype-colorinfo-dropdown.json";

  sliderValue = signal(0);
  private readonly startValue = 0;
  private readonly targetValue = 100;
  private readonly duration = 1000;
  private startTime: number = 0;

  constructor() { }

  loadArchetypeColorDetail(): Observable<any> {
    return this.http.get<any>(this.archetypeColorDetailsPath);
  }

  loadArchetypeDropdown(): Observable<any> {
    return this.http.get<any>(this.archetypeColorInfoDropdownPath);
  }

  updateSlider(event: Event) {
    const input = event.target as HTMLInputElement;
    this.sliderValue.set(Number(input.value));
  }

  animateSlider() {
  //   this.startTime = performance.now();
  //   requestAnimationFrame(this.update.bind(this));
  }

  // update(time: number) {
  //   const elapsed = time - this.startTime;
  //   const progress = Math.min(elapsed / this.duration, 1);
  //   const easedProgress = progress * (2 - progress); // Ease-in-out function
  //   const newValue = this.startValue + (this.targetValue - this.startValue) * easedProgress;

  //   this.sliderValue.set(newValue); // Update signal reactively

  //   if (progress < 1) {
  //     requestAnimationFrame(this.update.bind(this));
  //   }
  // }

}

