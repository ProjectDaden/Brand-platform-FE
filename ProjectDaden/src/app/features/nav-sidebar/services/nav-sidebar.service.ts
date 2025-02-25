import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navigation, NavigationCategory } from '../models/nav-sidebar-interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly http = inject(HttpClient);
  
  navigation = signal<NavigationCategory>({});

  loadNavigation() {
    this.http.get<Navigation>('assets/tempUsage/nav-side-bar.json')
      .subscribe(data => {
        console.log(data);
        this.navigation.set(data['nav-side-bar'].categories);
      });
  }
}