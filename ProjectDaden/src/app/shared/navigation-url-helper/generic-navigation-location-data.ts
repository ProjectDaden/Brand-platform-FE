import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlTrackerService {
  // Signals for URL segments and query parameters
  segments: WritableSignal<string[]> = signal([]);
  queryParams: WritableSignal<{ [key: string]: string }> = signal({});

  // Methods to access the Signals
  getAllSegments(): string[] {
    return this.segments();
  }

  getSegment(index: number): string | undefined {
    return this.segments()[index];
  }

  getAllQueryParams(): { [key: string]: string } {
    return this.queryParams();
  }

  getQueryParam(key: string): string | undefined {
    return this.queryParams()[key];
  }
}
