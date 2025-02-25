import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralPersistenceDispatcher<T> {
  constructor(private readonly http: HttpClient) {}

/*
    A general method to save data to the backend.
    @param url: The URL to send the data to.
    @param data: The data to send to the backend.
*/
  save(url: string, data: T): Observable<T> {
    return this.http.post<T>(url, data);
  }

/*
    A general method to load data from the backend.
    @param url: The URL to load the data from.
*/
  load(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}