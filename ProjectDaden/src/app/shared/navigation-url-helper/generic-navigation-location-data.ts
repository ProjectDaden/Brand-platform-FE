import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlTrackerService {
  /**
   * Signals for URL segments and query parameters set by sidebar-service 
   * when navigation is loaded in.
   */
  segments: WritableSignal<string[]> = signal([]);
  queryParams: WritableSignal<{ [key: string]: string }> = signal({});

 /**
  * This method returns the current segments as an array.
  * @returns {segments: string[], queryParams: { [key: string]: string }}
  */
  getAllSegments(): string[] {
    return this.segments();
  }

  /**
   * @param index - get the segment at a particular index.
   * @returns that segment as string or undefined if it doesn't exist.
   * @example getSegment(0) returns the first segment of the url.
   */
  getSegment(index: number): string | undefined {
    return this.segments()[index];
  }

  /**
   * @returns {segments: string[], queryParams: { [key: string]: string }}
   * @example getAllQueryParams() returns all query parameters as an object.
   */
  getAllQueryParams(): { [key: string]: string } {
    return this.queryParams();
  }

  /**
   * @param key - the key of the query parameter you want to get.
   * @returns the value of the query parameter or undefined if it doesn't exist.
   * @example getQueryParam('id') returns the value of the query parameter 'id'.
   */
  getQueryParam(key: string): string | undefined {
    return this.queryParams()[key];
  }
}
